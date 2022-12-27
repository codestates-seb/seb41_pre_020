package com.y2k.stackoverflow.question.service;

import com.y2k.stackoverflow.question.entity.Question;
import com.y2k.stackoverflow.question.entity.QuestionTag;
import com.y2k.stackoverflow.question.repository.QuestionTagRepository;
import org.springframework.stereotype.Service;
import java.util.List;


/**
 * Tag는 따로 api로 호출되지 않고 Question api 호출 시 함께 등록되는 부분이기 때문에
 * Question patch 시, 원래 등록된 태그가 또 들어간다면 중복 처리 되니 처리해야 함
 * -> 상태 값 표시해서 있는 태그면 다시 넣지 않음
 */

@Service
public class QuestionTagService {
    private final QuestionTagRepository questionTagRepository;

    public QuestionTagService(QuestionTagRepository questionTagRepository) {
        this.questionTagRepository = questionTagRepository;
    }

    public void updateQuestionTag(Long questionId) {
        List<QuestionTag> questionTags = questionTagRepository.findAllByQuestionId(questionId);
        questionTags.stream()
                .forEach(questionTag -> {
                    questionTag.setQuestionTagStatus(QuestionTag.QuestionTagStatus.QUESTION_TAG_DELETE);
                    questionTagRepository.save(questionTag);
                });
    }

    /**
     * QUESTION_TAG_CREATE만 찾아서 조회하기
     */
    public List<QuestionTag> findVerifiedQuestionTag(Question question) {
        return questionTagRepository.
                findAllByQuestionIdAndQuestionTagStatus(question.getQuestionId(), QuestionTag.QuestionTagStatus.QUESTION_TAG_CREATE);
    }
}
