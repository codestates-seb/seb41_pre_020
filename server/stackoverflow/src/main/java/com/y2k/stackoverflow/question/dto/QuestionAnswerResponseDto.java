package com.y2k.stackoverflow.question.dto;

import com.y2k.stackoverflow.answer.dto.AnswerResponseDto;
import com.y2k.stackoverflow.answer.dto.AnswersGetResponseDto;
import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.member.dto.MemberDto;
import com.y2k.stackoverflow.util.DateUtil;
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
    private String createdAt;
    private String lastModifiedAt;
    private int votes;
    private int views;
    private Boolean questionCheck;
    private int answers;
    private AnswersGetResponseDto<AnswerResponseDto> answerList;
    private MemberDto.Response member;

    private List<CommentDto.CommentQuestionResponse> comments;//제웅 추가

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = DateUtil.convertLocalDatetimeToTime(createdAt);
    }

    public void setLastModifiedAt(LocalDateTime lastModifiedAt) {
        this.lastModifiedAt = DateUtil.convertLocalDatetimeToTime(lastModifiedAt);
    }
}
