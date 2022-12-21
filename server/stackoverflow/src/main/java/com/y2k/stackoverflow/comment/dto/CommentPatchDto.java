package com.y2k.stackoverflow.comment.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentPatchDto {
    private long commentId;
    private String content;
}
