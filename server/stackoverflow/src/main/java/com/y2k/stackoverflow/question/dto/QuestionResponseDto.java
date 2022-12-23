package com.y2k.stackoverflow.question.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuestionResponseDto {
    private Long questionId;
    private String title;
    private String content;
    private List<QuestionTagResponseDto> questionTags;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
    private int votes;
    private int views;
}
