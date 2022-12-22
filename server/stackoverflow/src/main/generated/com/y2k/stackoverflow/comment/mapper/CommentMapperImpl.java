package com.y2k.stackoverflow.comment.mapper;

import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.comment.entity.Comment;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-22T20:33:05+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.16 (Azul Systems, Inc.)"
)
@Component
public class CommentMapperImpl implements CommentMapper {

    @Override
    public Comment commentPostToComment(CommentDto.Post commentPost) {
        if ( commentPost == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setContent( commentPost.getContent() );
        comment.setCommentType( commentPost.getCommentType() );
        comment.setMemberId( commentPost.getMemberId() );
        comment.setAnswerId( commentPost.getAnswerId() );
        comment.setQuestionId( commentPost.getQuestionId() );

        return comment;
    }

    @Override
    public Comment commentPatchToComment(CommentDto.Patch commentPatch) {
        if ( commentPatch == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setCommentId( commentPatch.getCommentId() );
        comment.setContent( commentPatch.getContent() );
        comment.setCommentType( commentPatch.getCommentType() );
        comment.setMemberId( commentPatch.getMemberId() );
        comment.setAnswerId( commentPatch.getAnswerId() );
        comment.setQuestionId( commentPatch.getQuestionId() );

        return comment;
    }

    @Override
    public CommentDto.Response commentToCommentResponse(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentDto.Response.ResponseBuilder response = CommentDto.Response.builder();

        response.commentId( comment.getCommentId() );
        response.content( comment.getContent() );
        response.memberId( comment.getMemberId() );
        response.questionId( comment.getQuestionId() );
        response.answerId( comment.getAnswerId() );
        response.createdAt( comment.getCreatedAt() );
        response.modifiedAt( comment.getModifiedAt() );
        response.commentType( comment.getCommentType() );

        return response.build();
    }

    @Override
    public List<CommentDto.Response> commentsToCommentResponses(List<Comment> comments) {
        if ( comments == null ) {
            return null;
        }

        List<CommentDto.Response> list = new ArrayList<CommentDto.Response>( comments.size() );
        for ( Comment comment : comments ) {
            list.add( commentToCommentResponse( comment ) );
        }

        return list;
    }
}
