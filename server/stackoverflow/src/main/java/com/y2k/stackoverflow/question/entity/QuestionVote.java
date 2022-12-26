package com.y2k.stackoverflow.question.entity;

import com.y2k.stackoverflow.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class QuestionVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    private Long voteCheck;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
    
    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    public void setMember(Member member) {
        this.member = member;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}
