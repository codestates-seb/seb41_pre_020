package com.y2k.stackoverflow.member.entity;

import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.audit.Auditable;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.member.dto.UserProfile;
import com.y2k.stackoverflow.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor
public class Member extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(nullable = false)
    private String displayName;

    @Column(nullable = false, unique = true, updatable = false)
    private String email;

    @Column
    private String password;

    @Column
    private String profileImage;

    @Embedded
    private UserProfile userProfile;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;

    //권한 부여를 위한 roles
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Answer> answers = new ArrayList<>();

    @Column(nullable = false)
    private boolean login;

    public void addQuestion(Question question) {
        questions.add(question);
        question.setMember(this);
    }

    public void addAnswer(Answer answer) {
        answers.add(answer);
        answer.setMember(this);
    }

    public enum MemberStatus {
        MEMBER_ACTIVE("활동중"),
        MEMBER_SLEEP("휴면 상태"),
        MEMBER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        MemberStatus(String status) {
            this.status = status;
        }
    }

}
