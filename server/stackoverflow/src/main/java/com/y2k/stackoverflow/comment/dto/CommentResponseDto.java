package com.y2k.stackoverflow.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommentResponseDto {
    private long commentId;
    private String content;
}
