package com.y2k.stackoverflow.answer.entity;

import com.y2k.stackoverflow.audit.Auditable;
import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    private Integer votes = 0;

    private Boolean answerCheck = false;

    @OneToMany(mappedBy = "answer", cascade = CascadeType.ALL)
    private List<AnswerVote> voteList = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void setQuestion(Question question) {
        this.question = question;
    }

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void setMember(Member member){
        this.member = member;
    }

    @OneToMany(mappedBy = "answer", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();
}
