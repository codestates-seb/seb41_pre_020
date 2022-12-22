package com.y2k.stackoverflow.comment.entity;

import com.y2k.stackoverflow.audit.Auditable;
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


    public enum CommentType{
        QUESTION,
        ANSWER
    }

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CommentType commentType;

    //나중에 int 수정 @Column//////////
//    @JsonBackReference
//    @ManyToOne(fetch =  FetchType.LAZY)
//    @JoinColumn(name = "member_id")
//    private Member member;
    @Column(nullable = false)
    private long memberId;

//    @JsonBackReference
//    @ManyToOne(fetch =  FetchType.LAZY)
//    @JoinColumn(name = "answer_id")
//    private Answer answer;
    @Column(nullable = false)
    private long answerId;

//    @JsonBackReference
//    @ManyToOne(fetch =  FetchType.LAZY)
//    @JoinColumn(name = "Question_id")
//    private Question question;
    @Column(nullable = false)
    private long questionId;

//    public void addMember(Member member){
//        this.member = member;
//    }
//    public void addQuestion(Question question){
//        this.question = question;
//    }
//    public void addAnswer(Answer answer){
//        this.answer = answer;
//    }

}
