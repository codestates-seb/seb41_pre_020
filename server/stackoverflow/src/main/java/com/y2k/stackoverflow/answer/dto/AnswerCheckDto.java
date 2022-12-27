package com.y2k.stackoverflow.answer.dto;

import lombok.*;

/**
 * 질문-답변 채택을 위한 dto
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AnswerCheckDto {
    private Long questionId;
    private Long answerId;
}
