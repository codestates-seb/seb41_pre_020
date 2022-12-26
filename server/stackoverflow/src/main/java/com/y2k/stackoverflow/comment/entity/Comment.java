package com.y2k.stackoverflow.comment.entity;

import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.audit.Auditable;
import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Comment extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commentId;

    @Column(nullable=false)
    @Size(min = 5)
    private String content;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CommentType commentType;


    public enum CommentType{
        QUESTION,
        ANSWER
    }




    @ManyToOne(fetch =  FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch =  FetchType.LAZY)
    @JoinColumn(name = "answer_id")
    private Answer answer;

    @ManyToOne(fetch =  FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private Question question;

    public void addMember(Member member){
        this.member = member;
    }
    public void addQuestion(Question question){
        this.question = question;
    }
    public void addAnswer(Answer answer){
        this.answer = answer;
    }

    public Comment(String content, Question question, Member member, CommentType commentType){
        this.content = content;
        this.question = question;
        this.member = member;
        this.commentType = commentType;
    }

    public Comment(String content, Answer answer, Member member, CommentType commentType){
        this.content = content;
        this.answer = answer;
        this.member = member;
        this.commentType = commentType;
    }

}
