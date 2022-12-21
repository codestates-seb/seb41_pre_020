package com.y2k.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class QuestionPatchDto {
    private Long questionId;
    private String title;
    private String content;
    private List<QuestionTagDto> questionTags;
}
