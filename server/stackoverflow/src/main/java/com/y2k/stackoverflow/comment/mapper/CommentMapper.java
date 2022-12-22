package com.y2k.stackoverflow.comment.mapper;

import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.comment.entity.Comment;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostToComment(CommentDto.Post commentPost);

    Comment commentPatchToComment(CommentDto.Patch commentPatch);

    CommentDto.Response commentToCommentResponse(Comment comment);
}
