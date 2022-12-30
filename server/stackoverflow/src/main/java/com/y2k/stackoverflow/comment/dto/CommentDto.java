package com.y2k.stackoverflow.comment.dto;

import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.member.dto.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

public class CommentDto {

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    public static class Post {
        private String content;

        private Comment.CommentType commentType;

        public Post(){

        }

    }

    @Getter
    @Setter
    public static class Patch {
        private long commentId;
        private String content;

        private Comment.CommentType commentType;
    }

    @Builder
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private long commentId;
        private String content;
        //-------------------------------
        private long questionId;
        private long answerId;
        private MemberDto.Response member;
        //--------------------------------
        private String createdAt;
        private String lastModifiedAt;
        private Comment.CommentType commentType;
    }


    @Builder
    @Getter
    @Setter
    @AllArgsConstructor
    public static class CommentQuestionResponse {
        private long commentId;
        private String content;
        //-------------------------------
        private long questionId;
        private MemberDto.Response member;
        //--------------------------------
        private String createdAt;
        private String lastModifiedAt;
        private Comment.CommentType commentType;
    }

    @Builder
    @Getter
    @Setter
    @AllArgsConstructor
    public static class CommentAnswerResponse {
        private long commentId;
        private String content;
        //-------------------------------
        private long answerId;
        private MemberDto.Response member;
        //--------------------------------
        private String createdAt;
        private String lastModifiedAt;
        private Comment.CommentType commentType;
    }


}
