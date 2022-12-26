package com.y2k.stackoverflow.comment.mapper;

import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.comment.entity.Comment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostToComment(CommentDto.Post commentPost);

    Comment commentPatchToComment(CommentDto.Patch commentPatch);

    default CommentDto.Response commentToCommentResponse(Comment comment){
        if(comment.getCommentType() == Comment.CommentType.QUESTION){
            return CommentDto.Response.builder()
                    .commentId(comment.getCommentId())
                    .content(comment.getContent())
                    .questionId(comment.getQuestion().getQuestionId())
                    .createdAt(comment.getCreatedAt())
                    .lastModifiedAt(comment.getModifiedAt())
                    .commentType(comment.getCommentType())
                    .build();
        }

        if(comment.getCommentType() == Comment.CommentType.ANSWER){
            return CommentDto.Response.builder()
                    .commentId(comment.getCommentId())
                    .content(comment.getContent())
                    .answerId(comment.getAnswer().getAnswerId())
                    .createdAt(comment.getCreatedAt())
                    .lastModifiedAt(comment.getModifiedAt())
                    .commentType(comment.getCommentType())
                    .build();
        }

        return CommentDto.Response.builder()
                .commentId(comment.getCommentId())
                .content(comment.getContent())
                .createdAt(comment.getCreatedAt())
                .lastModifiedAt(comment.getModifiedAt())
                .commentType(comment.getCommentType())
                .build();
    }
}
