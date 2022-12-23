package com.y2k.stackoverflow.answer.entity;

import com.y2k.stackoverflow.audit.Auditable;
import com.y2k.stackoverflow.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Answer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private Integer votes = 0;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void setQuestion(Question question) {
        this.question = question;
    }

    /*@ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void setMember(Member member){
        this.member = member;
    }*/
}
