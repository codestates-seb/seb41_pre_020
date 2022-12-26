package com.y2k.stackoverflow.answer.dto;

import com.y2k.stackoverflow.member.dto.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerResponseDto {
    private Long answerId;
    private String content;
    private Integer votes;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private MemberDto.Response member;
}
