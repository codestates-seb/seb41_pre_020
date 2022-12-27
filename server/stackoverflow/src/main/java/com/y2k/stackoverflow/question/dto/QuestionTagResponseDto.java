package com.y2k.stackoverflow.question.dto;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionTagResponseDto {
    private Long tagId;
    private String tagName;
}
