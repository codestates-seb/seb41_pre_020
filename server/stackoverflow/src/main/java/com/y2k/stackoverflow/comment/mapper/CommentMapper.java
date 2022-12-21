package com.y2k.stackoverflow.comment.mapper;

import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.comment.dto.CommentPatchDto;
import com.y2k.stackoverflow.comment.dto.CommentPostDto;
import com.y2k.stackoverflow.comment.dto.CommentResponseDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostDtoToComment(CommentPostDto commentPostDto);

    Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto);

    CommentResponseDto commentToCommentResponseDto(Comment comment);
}
