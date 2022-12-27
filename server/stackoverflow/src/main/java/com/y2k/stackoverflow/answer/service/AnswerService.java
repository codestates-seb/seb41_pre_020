package com.y2k.stackoverflow.answer.service;

import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.answer.entity.AnswerVote;
import com.y2k.stackoverflow.answer.repository.AnswerRepository;
import com.y2k.stackoverflow.answer.repository.AnswerVoteRepository;
import com.y2k.stackoverflow.exception.BusinessLogicException;
import com.y2k.stackoverflow.exception.ExceptionCode;
import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.member.service.MemberService;
import com.y2k.stackoverflow.question.entity.Question;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final AnswerVoteRepository answerVoteRepository;
    private final MemberService memberService;

    public AnswerService(AnswerRepository answerRepository, AnswerVoteRepository answerVoteRepository, MemberService memberService) {
        this.answerRepository = answerRepository;
        this.answerVoteRepository = answerVoteRepository;
        this.memberService = memberService;
    }

    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        // 해당 답변이 존재하는 지 검증 한 후
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        //로그인 유저와 답변 작성 유저와 비교해서 같다면 수정, 아니라면 접근 금지 예외 발생
        if(findAnswer.getMember().getMemberId() != memberService.getLoginMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_FORBIDDEN);
        }

        // 답변 내용 업데이트
        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));

        return answerRepository.save(findAnswer);
    }

    public List<Answer> findAnswers() {
        return answerRepository.findAll();
    }

    public Answer findAnswer(long answerId){
        return findVerifiedAnswer(answerId);
    }

    public List<Answer> findAnswersQuestion(Question question) {
        return answerRepository.findAllByQuestion(question);
    }

    public void deleteAnswer(Long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        //로그인 유저와 답변 작성 유저와 비교해서 같다면 삭제, 아니라면 접근 금지 예외 발생
        if(findAnswer.getMember().getMemberId() != memberService.getLoginMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_FORBIDDEN);
        }
        answerRepository.delete(findAnswer);
    }

    private Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

    /**
     * 한 질문에 이미 추천 or 비추천한 사람이면 다시 추천 못함
     * answer_vote 테이블에서 로그인 유저 memberId로 조회 후, 결과가 존재하지 않으면 추천 가능
     */

    public Answer likeAnswerVote(Long answerId, Member member, AnswerVote answerVote) {
        Answer findAnswer = findVerifiedAnswer(answerId);

        // 로그인 한 회원이 추천 눌렀는지 확인 후,
        // 안눌렀다면 answer_vote 테이블에 answer_id와 member_id를 넣어 중복 방지
        if(!findVerifiedVoteMember(answerId) || memberService.getLoginMember().getMemberId().equals(findAnswer.getMember().getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_FORBIDDEN);
        }
        answerVote.setAnswer(findAnswer);
        answerVote.setMember(member);
        answerVote.setVoteCheck(answerVote.getVoteCheck());

        if(answerVote.getVoteCheck() == 0) { // post로 보낸 값이 0이면 비추천
            findAnswer.setVotes(findAnswer.getVotes() - 1);
        }

        if(answerVote.getVoteCheck() == 1) { // post로 보낸 값이 1이면 추천
            findAnswer.setVotes(findAnswer.getVotes() + 1);
        }

        answerVoteRepository.save(answerVote);
        return answerRepository.save(findAnswer);
    }


    //로그인 한 회원이 추천 눌렀는지 확인해서 안 눌렀으면 TRUE 리턴
    private boolean findVerifiedVoteMember(Long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        return answerVoteRepository.findByAnswerAndMember(findAnswer, memberService.getLoginMember()).isEmpty();
    }

    /**
     * 채택 기능
     * 1. 질문 작성자만 채택 가능
     * 2. 채택은 한 번만
     * 3. Question 테이블 check 기본값 false , 채택 하면 true
     */
    public Answer findCheckAnswer(Long answerId) {
        // 어차피 answer 하나만 찾으면 questionId 값이 등록 되어 있으니 따로 찾을 필요X
        Answer findAnswer = findVerifiedAnswer(answerId);
        Question checkQuestion = findAnswer.getQuestion();

        //질문 check 값이 true 값 이라면 => 이미 채택
        if(checkQuestion.getQuestionCheck()) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_CHECK_EXISTS);
        }

        //로그인 유저와 질문 작성 유저와 비교해서 같다면 삭제, 아니라면 접근 금지 예외 발생 => 질문 작성자만 채택
        if(checkQuestion.getQuestionId() != memberService.getLoginMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_FORBIDDEN);
        }
        checkQuestion.setQuestionCheck(true); // 전체 질문 보기에서 채택 여부 확인 시 사용
        findAnswer.setAnswerCheck(true); // 특정 질문 보기에서 어떤 답변 채택했는지 확인 시 사용

        return answerRepository.save(findAnswer);
    }


}
