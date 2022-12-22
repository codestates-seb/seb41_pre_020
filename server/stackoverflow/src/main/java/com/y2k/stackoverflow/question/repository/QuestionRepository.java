package com.y2k.stackoverflow.question.repository;

import com.y2k.stackoverflow.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
