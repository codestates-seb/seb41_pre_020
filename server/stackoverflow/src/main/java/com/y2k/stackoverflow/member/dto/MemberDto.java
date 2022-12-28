package com.y2k.stackoverflow.member.dto;

import com.y2k.stackoverflow.member.dto.mypage.MyPageAnswer;
import com.y2k.stackoverflow.member.dto.mypage.MyPageQuestion;
import com.y2k.stackoverflow.member.entity.Member;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.List;

public class MemberDto {

    @Getter @AllArgsConstructor
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Post {

        @NotBlank
        @Email
        private String email;

        @Pattern(regexp = "^\\S+(\\s?\\S+)*$", message = "이름은 필수값이며, 이름의 처음과 끝은 공백이 아니어야 합니다.")
        private String displayName;

        @NotBlank
        @Pattern(regexp="(?=.*[0-9])(?=.*[a-z])(?=.*\\W)(?=\\S+$).{8,16}",
        message = "비밀번호는 영문 대/소문자, 숫자, 특수기호를 포함한 8~16자리 이내로 구성되어야 합니다.")
        private String password;

    }

    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Patch {
        private long memberId;
        private String password;

        @Pattern(regexp = "^\\S+(\\s?\\S+)*$", message = "이름은 공백이 아니어야 합니다.")
        private String displayName;
        private UserProfile userProfile;
    }

    @Getter @AllArgsConstructor
    public static class Response {
        private long memberId;
        private String displayName;
        private String profileImage;
        private Member.MemberStatus memberStatus;

        public String getMemberStatus() {
            return memberStatus.getStatus(); }
    }

    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    public static class DetailsResponse {
        private long memberId;
        private String displayName;
        private String profileImage;
        private Member.MemberStatus memberStatus;
        private String createdAt;
        private String modifiedAt;
        private UserProfile userProfile;

        public String getMemberStatus() {
            return memberStatus.getStatus(); }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class MyPageResponse {
        private long memberId;
        private String displayName;
        private String profileImage;
        private Member.MemberStatus memberStatus;
        private String createdAt;
        private String modifiedAt;

        //--------Question-------------//

        private List<MyPageQuestion> questions = new ArrayList<>();
        private int questionsTotal;

        //--------Answer-------------//

        private List<MyPageAnswer> answers = new ArrayList<>();
        private int answersTotal;

        //--------tag---------------//
        private List<String> tags = new ArrayList<>();
        private int tagTotal;

        public String getMemberStatus() {
            return memberStatus.getStatus();
        }

        public MyPageResponse(long memberId, String displayName, String profileImage, Member.MemberStatus memberStatus) {
            this.memberId = memberId;
            this.displayName = displayName;
            this.profileImage = profileImage;
            this.memberStatus = memberStatus;
        }
    }

}
