package com.y2k.stackoverflow.answer.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AnswerVoteDto {
    private Long voteCheck;
}
