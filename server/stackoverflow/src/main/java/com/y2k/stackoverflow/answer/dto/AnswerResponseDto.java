package com.y2k.stackoverflow.answer.dto;

import com.y2k.stackoverflow.member.dto.MemberDto;
import com.y2k.stackoverflow.util.DateUtil;
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
    private Boolean answerCheck;
    private String createdAt;
    private String modifiedAt;
    private MemberDto.Response member;

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = DateUtil.convertLocalDatetimeToTime(createdAt);
    }

    public void setModifiedAt(LocalDateTime modifiedAt) {
        this.modifiedAt = DateUtil.convertLocalDatetimeToTime(modifiedAt);
    }
}
