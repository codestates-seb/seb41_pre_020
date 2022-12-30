package com.y2k.stackoverflow.answer.entity;

import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false)
    private String content;

    private Integer votes = 0;

    private Boolean answerCheck = false;

    //추천+채택 시 계속 modifiedAt이 업데이트 되어 따로 사용
    @CreatedDate
    @Column(nullable = false, updatable = false) //update 시, createdAt null 문제로 updatable = false 추가
    private LocalDateTime createdAt;


    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

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
