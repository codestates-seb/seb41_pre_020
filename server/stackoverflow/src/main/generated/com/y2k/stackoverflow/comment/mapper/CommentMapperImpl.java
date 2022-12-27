package com.y2k.stackoverflow.comment.mapper;

import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.comment.entity.Comment;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-26T16:17:37+0900",
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

        return comment;
    }
}
