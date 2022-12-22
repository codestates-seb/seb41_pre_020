package com.y2k.stackoverflow.question.entity;

import com.y2k.stackoverflow.audit.Auditable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 질문 엔티티
 * table name : Question
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    //질문 제목
    @Column(nullable = false)
    private String title;

    //질문 내용
    @Column(nullable = false)
    private String content;

    //투표 수
    @Column(nullable = false)
    private Integer votes = 0;

    //조회 수
    @Column(nullable = false)
    private Integer views = 0;

    /*//등록 일자
    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    //마지막 수정 일자
    @LastModifiedDate
    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime lastModifiedAt = LocalDateTime.now();*/

    //질문 - 태그 1:N
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<QuestionTag> questionTags = new ArrayList<>();

    //멤버 관련 추후 주석 해제
    /*@ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void setMember(Member member){
        this.member = member;
    }*/

    public void addQuestionTags(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
        if(questionTag.getQuestion() != this) {
            questionTag.addQuestion(this);
        }
    }
}
