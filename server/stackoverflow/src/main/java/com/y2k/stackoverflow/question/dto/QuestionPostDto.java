package com.y2k.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Pattern;
import java.util.List;

/**
 * 질문 등록을 위한 dto(POST)
 */
@Getter
@Setter
@AllArgsConstructor
public class QuestionPostDto {
    @Pattern(regexp = "^\\S+(\\s?\\S+)*$", message = "제목은 공백이 아니어야 합니다.")
    private String title;
    @Pattern(regexp = "^\\S+(\\s?\\S+)*$", message = "내용은 공백이 아니어야 합니다.")
    private String content;
    private List<QuestionTagDto> questionTags;

    //멤버 관련 추후 주석 해제
   /* public Member getMember() {
        Member member = new Member();
        member.setMemberId(memberId);
        return member;
    }*/
}
