package com.y2k.stackoverflow.member.dto;

import com.y2k.stackoverflow.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class MemberDto {

    @Getter @AllArgsConstructor
    public static class Post {
        @Pattern(regexp = "^\\S+(\\s?\\S+)*$", message = "이름은 필수값이며, 이름의 처음과 끝은 공백이 아니어야 합니다.")
        private String displayName;

        @NotBlank
        @Email
        private String email;

        @NotBlank
        @Pattern(regexp="(?=.*[0-9])(?=.*[a-z])(?=.*\\W)(?=\\S+$).{8,16}",
        message = "비밀번호는 영문 대/소문자, 숫자, 특수기호를 포함한 8~16자리 이내로 구성되어야 합니다.")
        private String password;
    }

    @Getter @Setter
    @AllArgsConstructor
    public static class Patch {
        private long memberId;

        @Pattern(regexp = "^\\S+(\\s?\\S+)*$", message = "이름은 공백이 아니어야 합니다.")
        private String displayName;
    }

    @Getter @AllArgsConstructor
    public static class Response {
        private String displayName;
        private String email;
        private Member.MemberStatus memberStatus;
    }
}
