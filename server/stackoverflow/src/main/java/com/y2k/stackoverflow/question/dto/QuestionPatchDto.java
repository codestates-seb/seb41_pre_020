package com.y2k.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Pattern;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class QuestionPatchDto {
    private Long questionId;
    @Pattern(regexp = "^\\S+(\\s?\\S+)*$", message = "제목은 공백이 아니어야 합니다.")
    private String title;
    @Pattern(regexp = "^\\S+(\\s?\\S+)*$", message = "내용은 공백이 아니어야 합니다.")
    private String content;
    private List<QuestionTagDto> questionTags;
}
