package com.y2k.stackoverflow.comment.mapper;

import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.comment.entity.Comment;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-28T22:53:29+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.1.jar, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class CommentMapperImpl implements CommentMapper {

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
