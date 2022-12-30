package com.y2k.stackoverflow.answer.entity;

import com.y2k.stackoverflow.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class AnswerVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;

    public void setMember(Member member) {
        this.member = member;
    }

    public void setAnswer(Answer answer) {
        this.answer = answer;
    }
}
