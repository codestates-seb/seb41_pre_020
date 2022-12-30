package com.y2k.stackoverflow.question.service;

import com.y2k.stackoverflow.question.entity.Question;
import com.y2k.stackoverflow.question.entity.QuestionTag;
import com.y2k.stackoverflow.question.repository.QuestionTagRepository;
import org.springframework.stereotype.Service;
import java.util.List;


/**
 * Tag는 따로 api로 호출되지 않고 Question api 호출 시 함께 등록되는 부분이기 때문에
 * Question patch 시, 원래 등록된 태그가 또 들어간다면 중복 처리 되니 처리해야 함
 * -> 태그 테이블 생성 후 태그 삭제 - 다시 생성
 */

@Service
public class QuestionTagService {
    private final QuestionTagRepository questionTagRepository;

    public QuestionTagService(QuestionTagRepository questionTagRepository) {
        this.questionTagRepository = questionTagRepository;
    }

    //기존에 있던 태그 삭제(질문 수정 시)
    public void updateQuestionTag(Long questionId) {
        List<QuestionTag> questionTags = questionTagRepository.findAllByQuestionId(questionId);
        questionTags.stream()
                .forEach(questionTag -> {
                    questionTagRepository.delete(questionTag);
                });
    }


    public List<QuestionTag> findQuestionTag(Question question) {
        return questionTagRepository.findAllByQuestionId(question.getQuestionId());
    }
}
