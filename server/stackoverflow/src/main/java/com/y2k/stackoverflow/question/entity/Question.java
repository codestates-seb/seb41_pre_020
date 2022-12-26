package com.y2k.stackoverflow.question.entity;

import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.audit.Auditable;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.member.entity.Member;
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
    private Integer votes;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<QuestionVote> voteList = new ArrayList<>();


    //조회 수
    @Column(nullable = false)
    private Integer views;

    @OneToMany(mappedBy = "question")
    private List<Comment> comments = new ArrayList<>();


    //질문 - 태그 1:N
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<QuestionTag> questionTags = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answerList = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
    public void setMember(Member member){
        this.member = member;
    }

    public void addQuestionTags(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
        if(questionTag.getQuestion() != this) {
            questionTag.addQuestion(this);
        }
    }
}
