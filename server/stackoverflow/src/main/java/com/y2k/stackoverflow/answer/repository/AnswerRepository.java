package com.y2k.stackoverflow.answer.repository;

import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findAllByQuestion(Question question);
}
