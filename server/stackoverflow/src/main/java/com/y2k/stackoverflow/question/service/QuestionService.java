package com.y2k.stackoverflow.question.service;

import com.y2k.stackoverflow.exception.BusinessLogicException;
import com.y2k.stackoverflow.exception.ExceptionCode;
import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.member.service.MemberService;
import com.y2k.stackoverflow.question.entity.Question;
import com.y2k.stackoverflow.question.entity.QuestionVote;
import com.y2k.stackoverflow.question.repository.QuestionRepository;
import com.y2k.stackoverflow.question.repository.QuestionVoteRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionTagService questionTagService;
    private final MemberService memberService;
    private final QuestionVoteRepository questionVoteRepository;

    public QuestionService(QuestionRepository questionRepository, QuestionTagService questionTagService,
                           MemberService memberService, QuestionVoteRepository questionVoteRepository) {
        this.questionRepository = questionRepository;
        this.questionTagService = questionTagService;
        this.memberService = memberService;
        this.questionVoteRepository = questionVoteRepository;
    }

    /**
     * 질문 등록
     */
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    /**
     * 질문 수정
     */
    public Question updateQuestion(Question question) {
        // 질문이 존재하는 지 검증 한 후
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());
        //로그인 유저와 질문 작성 유저와 비교해서 같다면 수정, 아니라면 접근 금지 예외 발생
        if(findQuestion.getMember().getMemberId() != memberService.getLoginMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_FORBIDDEN);
        }

        // 제목, 내용, 태그 업데이트 시간 업데이트
        Optional.ofNullable(question.getTitle())
                .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));
        questionTagService.updateQuestionTag(question.getQuestionId());
        Optional.ofNullable(question.getQuestionTags())
                .ifPresent(questionTags -> findQuestion.setQuestionTags(questionTags));
        Optional.ofNullable(question.getModifiedAt())
                .ifPresent(modifiedAt -> findQuestion.setModifiedAt(modifiedAt));

        //수정 할 때 member_id null 값 해결
        question.setMember(memberService.getLoginMember());

        return questionRepository.save(findQuestion);
    }

    /**
     * 특정 질문 조회
     */
    public Question findQuestion(Long questionId) {
        return findVerifiedQuestion(questionId);
    }

    /**
     * 특정 질문 조회 (조회수 +1)
     */
    public Question findVotePlusQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);

        //조회 시, View + 1
        findQuestion.setViews(findQuestion.getViews() + 1);
        questionRepository.save(findQuestion);

        return findQuestion;
    }

    /**
     * 전체 질문 조회
     */
    public Page<Question> findQuestions(int page, int size, String sort) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by(sort).descending()));
    }

    /**
     * 전체 질문 조회수를 위한 메서드
     */
    public Integer getQuestionsCount() {
        return questionRepository.findAll().size();
    }


    /**
     * 특정 질문 삭제
     */
    public void deleteQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        //로그인 유저와 질문 작성 유저와 비교해서 같다면 삭제, 아니라면 접근 금지 예외 발생
        if(findQuestion.getMember().getMemberId() != memberService.getLoginMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_FORBIDDEN);
        }
        questionRepository.delete(findQuestion);
    }

    /**
     *  질문 존재 여부 확인
     */
    private Question findVerifiedQuestion(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion =
                optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

    /**
     * 한 질문에 이미 추천 or 비추천한 사람이면 다시 추천 못함
     * 본인 글은 추천 or 비추천 못함 ------------------------추가
     * question_vote 테이블에서 로그인 유저 memberId로 조회 후, 결과가 존재하지 않으면 추천 가능
     */

    public Question likeQuestionVote(Long questionId, Member member, QuestionVote questionVote) {
        Question findQuestion = findVerifiedQuestion(questionId);

        // 1. 로그인 한 회원이 추천 눌렀는지 확인 후,
        // 안눌렀다면 question_vote 테이블에 question_id와 member_id를 넣어 중복 방지
        // 로그인한 회원이 질문 작성한 사람이라면 오류
        if(!findVerifiedVoteMember(questionId) || memberService.getLoginMember().getMemberId().equals(findQuestion.getMember().getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_FORBIDDEN);
        }
        questionVote.setQuestion(findQuestion);
        questionVote.setMember(member);
        questionVote.setVoteCheck(questionVote.getVoteCheck());

        if(questionVote.getVoteCheck() == 0) { // post로 보낸 값이 0이면 비추천
            //비추천 누른 질문에 전체 추천 수 카운트
            findQuestion.setVotes(findQuestion.getVotes() - 1);
        }
        if(questionVote.getVoteCheck() == 1) { // post로 보낸 값이 1이면 추천
            findQuestion.setVotes(findQuestion.getVotes() + 1);
        }

        questionVoteRepository.save(questionVote);
        return questionRepository.save(findQuestion);
    }

    //로그인 한 회원이 추천 눌렀는지 확인해서 안 눌렀으면 TRUE 리턴
    private boolean findVerifiedVoteMember(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        return questionVoteRepository.findByQuestionAndMember(findQuestion, memberService.getLoginMember()).isEmpty();
    }

    public Page<Question> searchQuestion(int page, int size, String sort, String keyword) {
        //만약 search가 앞 뒤로 [ ]로 감싸져서 온다면 태그 검색
        if(keyword.charAt(0) =='[' && keyword.charAt(keyword.length()-1) ==']') {
            return questionRepository.searchQuestionTag(
                    PageRequest.of(page, size, Sort.by(sort).descending()),
                    keyword.substring(1, keyword.length()-1));
        }
        return questionRepository.searchQuestion(PageRequest.of(page, size, Sort.by(sort).descending()), keyword);
    }

}
