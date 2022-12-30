package com.y2k.stackoverflow.answer.dto;

import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.member.dto.MemberDto;
import com.y2k.stackoverflow.util.DateUtil;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Builder
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

    private List<CommentDto.CommentAnswerResponse> comments;//제웅 추가


    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = DateUtil.convertLocalDatetimeToTime(createdAt);
    }

    public void setModifiedAt(LocalDateTime modifiedAt) {
        this.modifiedAt = DateUtil.convertLocalDatetimeToTime(modifiedAt);
    }
}
