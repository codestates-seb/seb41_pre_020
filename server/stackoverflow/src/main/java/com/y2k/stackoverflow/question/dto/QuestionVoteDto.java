package com.y2k.stackoverflow.question.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class QuestionVoteDto {
    private Long voteCheck;
}
