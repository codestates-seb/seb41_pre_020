package com.y2k.stackoverflow.question.repository;

import com.y2k.stackoverflow.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Query("SELECT q FROM Question q where q.title LIKE %:search% OR q.content LIKE %:search%")
    Page<Question> searchQuestion(PageRequest pageRequest, String search);

    @Query("SELECT q FROM Question q JOIN QuestionTag t ON q.questionId = t.question.questionId where t.tagName LIKE :search")
    Page<Question> searchQuestionTag(PageRequest pageRequest, String search);

}
