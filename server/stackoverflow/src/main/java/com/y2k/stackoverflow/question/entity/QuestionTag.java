package com.y2k.stackoverflow.question.entity;

import com.y2k.stackoverflow.member.entity.Member;
import lombok.*;

import javax.persistence.*;

/**
 * Question 테이블 : Tag 테이블 = N:M
 * 다대다 관계에 있는 두 테이블 사이에 QUESTION_TAG 테이블을 두고 두 개의 1:N 관계 만들기
 */
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    @Column(nullable = false)
    private String tagName;

    //@JoinColumn - 외래키 매핑, 생략 시 필드명_(기본키 컬럼명) 으로 외래키 매핑
    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void setMember(Member member) {
        this.member = member;
    }

    public void addQuestion(Question question) {
        this.question = question;
        if(!this.question.getQuestionTags().contains(this)) {
            this.question.getQuestionTags().add(this);
        }
    }

}
