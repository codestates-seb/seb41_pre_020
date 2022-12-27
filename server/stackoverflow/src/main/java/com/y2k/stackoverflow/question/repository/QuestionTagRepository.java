package com.y2k.stackoverflow.question.repository;

import com.y2k.stackoverflow.question.entity.QuestionTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {
    // Param으로 파라미터를 명확하게 바인딩
    @Query("select q from QuestionTag q where q.question.questionId = :questionId")
    List<QuestionTag> findAllByQuestionId(@Param("questionId") Long questionId);
    // questionId, questionTagId로 검색
    @Query("SELECT q FROM QuestionTag q where q.question.questionId = :questionId and q.questionTagStatus = :questionTagStatus")
    List<QuestionTag> findAllByQuestionIdAndQuestionTagStatus(@Param("questionId") Long questionId,
                                                              @Param("questionTagStatus") QuestionTag.QuestionTagStatus questionTagStatus);
}
