package com.y2k.stackoverflow.question.service;

import com.y2k.stackoverflow.exception.BusinessLogicException;
import com.y2k.stackoverflow.exception.ExceptionCode;
import com.y2k.stackoverflow.question.entity.Question;
import com.y2k.stackoverflow.question.repository.QuestionRepository;
import com.y2k.stackoverflow.question.repository.QuestionTagRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionTagService questionTagService;

    private final QuestionTagRepository questionTagRepository;

    public QuestionService(QuestionRepository questionRepository, QuestionTagService questionTagService, QuestionTagRepository questionTagRepository) {
        this.questionRepository = questionRepository;
        this.questionTagService = questionTagService;
        this.questionTagRepository = questionTagRepository;
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
        // 제목, 내용, 태그 업데이트
        Optional.ofNullable(question.getTitle())
                .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));
        questionTagService.updateQuestionTag(question.getQuestionId());
        Optional.ofNullable(question.getQuestionTags())
                .ifPresent(questionTags -> findQuestion.setQuestionTags(questionTags));
        /*findQuestion.setQuestionTags(
                questionTagRepository.findAllByQuestionIdAndQuestionTagStatus(
                        question.getQuestionId(),
                        QuestionTag.QuestionTagStatus.QUESTION_TAG_CREATE));*/
        return questionRepository.save(question);
    }

    /**
     * 특정 질문 조회
     */
    public Question findQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);

        //조회 시, View + 1
        findQuestion.setViews(findQuestion.getViews() + 1);
        questionRepository.save(findQuestion);

        return findQuestion;
    }

    /**
     * 전체 질문 조회
     */
    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    /**
     * 특정 질문 삭제
     */
    public void deleteQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }


    public Question findVerifiedQuestion(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion =
                optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
