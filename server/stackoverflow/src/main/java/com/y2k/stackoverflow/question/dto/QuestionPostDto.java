package com.y2k.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

/**
 * 질문 등록을 위한 dto(POST)
 */
@Getter
@AllArgsConstructor
public class QuestionPostDto {
    //private Long memberId;
    private String title;
    private String content;
    private List<QuestionTagDto> questionTags;

    //멤버 관련 추후 주석 해제
   /* public Member getMember() {
        Member member = new Member();
        member.setMemberId(memberId);
        return member;
    }*/
}
