package com.y2k.stackoverflow.comment.mapper;

import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.member.mapper.MemberMapper;
import com.y2k.stackoverflow.member.service.MemberService;
import com.y2k.stackoverflow.util.DateUtil;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommentMapper {
//    Comment commentPostToComment(CommentDto.Post commentPost);

    default Comment commentPostToComment(CommentDto.Post commentPost, MemberService memberService){

        if ( commentPost == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setMember(memberService.getLoginMember());
        comment.setContent( commentPost.getContent() );
        comment.setCommentType( commentPost.getCommentType() );

        return comment;

//        return CommentDto.Post.builder()
//                .commentType(commentPost.getCommentType())
//                .content(commentPost.getContent())
    }

    Comment commentPatchToComment(CommentDto.Patch commentPatch);

    default CommentDto.Response commentToCommentResponse(Comment comment, MemberMapper memberMapper){
        if(comment.getCommentType() == Comment.CommentType.QUESTION){
            return CommentDto.Response.builder()
                    .commentId(comment.getCommentId())
                    .content(comment.getContent())
                    .questionId(comment.getQuestion().getQuestionId())
                    .member(memberMapper.memberToResponseDto(comment.getMember()))
                    .createdAt(DateUtil.convertLocalDatetimeToTime(comment.getCreatedAt()))
                    .lastModifiedAt(DateUtil.convertLocalDatetimeToTime(comment.getModifiedAt()))
                    .commentType(comment.getCommentType())
                    .build();
        }

        if(comment.getCommentType() == Comment.CommentType.ANSWER){
            return CommentDto.Response.builder()
                    .commentId(comment.getCommentId())
                    .content(comment.getContent())
                    .answerId(comment.getAnswer().getAnswerId())
                    .member(memberMapper.memberToResponseDto(comment.getMember()))
                    .createdAt(DateUtil.convertLocalDatetimeToTime(comment.getCreatedAt()))
                    .lastModifiedAt(DateUtil.convertLocalDatetimeToTime(comment.getModifiedAt()))
                    .commentType(comment.getCommentType())
                    .build();
        }

        return null;
    }
}
