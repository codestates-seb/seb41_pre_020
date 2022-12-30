package com.y2k.stackoverflow.question.entity;

import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.member.entity.Member;
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

/**
 * 질문 엔티티
 * table name : Question
 */
@EntityListeners(AuditingEntityListener.class)
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Question{

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
    private Integer votes;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<QuestionVote> voteList = new ArrayList<>();

    //질문 채택 여부
    @Column(nullable = false)
    private Boolean questionCheck = false;

    //조회 수
    @Column(nullable = false)
    private Integer views;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();


    // 특정 질문 조회 시 조회수 올라가는 로직 때문에 계속 modifiedAt이 업데이트 되어 따로 사용
    @CreatedDate
    @Column(nullable = false, updatable = false) //update 시, createdAt null 문제로 updatable = false 추가
    private LocalDateTime createdAt;


    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

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