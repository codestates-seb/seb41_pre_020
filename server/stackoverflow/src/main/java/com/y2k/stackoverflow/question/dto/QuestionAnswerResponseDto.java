package com.y2k.stackoverflow.question.dto;

import com.y2k.stackoverflow.answer.dto.AnswerResponseDto;
import com.y2k.stackoverflow.answer.dto.AnswersGetResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
/**
 * 질문을 눌렀을 때 그 질문에 대한 답변까지 함께 출력하기 위한 Dto
 */
public class QuestionAnswerResponseDto {
    private Long questionId;
    private String title;
    private String content;
    private List<QuestionTagResponseDto> questionTags;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
    private int votes;
    private int views;
    private AnswersGetResponseDto<AnswerResponseDto> answers;
}
