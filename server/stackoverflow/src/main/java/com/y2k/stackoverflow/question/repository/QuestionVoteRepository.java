package com.y2k.stackoverflow.question.repository;

import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.question.entity.Question;
import com.y2k.stackoverflow.question.entity.QuestionVote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {
    Optional<QuestionVote> findByQuestionAndMember(Question question, Member member);
}
