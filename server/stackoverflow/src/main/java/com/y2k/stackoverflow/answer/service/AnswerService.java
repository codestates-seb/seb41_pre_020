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

    public Answer likeAnswerVote(Long answerId, Member member) {
        Answer findAnswer = findVerifiedAnswer(answerId);

        // 로그인 한 회원이 추천 눌렀는지 확인 후,
        // 안눌렀다면 answer_vote 테이블에 answer_id와 member_id를 넣어 중복 방지
        if(findVerifiedVoteMember(answerId)) {
            AnswerVote answerVote = new AnswerVote();
            answerVote.setAnswer(findAnswer);
            answerVote.setMember(member);
            answerVoteRepository.save(answerVote);

            //추천 누른 질문에 전체 추천 수 카운트
            findAnswer.setVotes(findAnswer.getVotes() + 1);
        }else {
            throw new BusinessLogicException(ExceptionCode.ACCESS_FORBIDDEN);
        }
        return answerRepository.save(findAnswer);
    }


    public Answer dislikeAnswerVote(Long answerId, Member member) {
        Answer findAnswer = findVerifiedAnswer(answerId);

        // 로그인 한 회원이 추천 눌렀는지 확인 후,
        // 안눌렀다면 answer_vote 테이블에 answer_id와 member_id를 넣어 중복 방지
        if(findVerifiedVoteMember(answerId)) {
            AnswerVote answerVote = new AnswerVote();
            answerVote.setAnswer(findAnswer);
            answerVote.setMember(member);
            answerVoteRepository.save(answerVote);

            //추천 누른 질문에 전체 추천 수 카운트
            findAnswer.setVotes(findAnswer.getVotes() - 1);
        }else {
            throw new BusinessLogicException(ExceptionCode.ACCESS_FORBIDDEN);
        }
        return answerRepository.save(findAnswer);
    }

    //로그인 한 회원이 추천 눌렀는지 확인해서 안 눌렀으면 TRUE 리턴
    private boolean findVerifiedVoteMember(Long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        return answerVoteRepository.findByAnswerAndMember(findAnswer, memberService.getLoginMember()).isEmpty();
    }


}
