package com.y2k.stackoverflow.comment.service;

import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.comment.repository.CommentRepository;
import com.y2k.stackoverflow.exception.BusinessLogicException;
import com.y2k.stackoverflow.exception.ExceptionCode;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment createComment(Comment comment){
        return commentRepository.save(comment);
    }

    public Comment updateComment(Comment comment){
        Comment findComment = findVerifiedComment(comment.getCommentId());

        Optional.ofNullable(comment.getContent())
                .ifPresent(content -> findComment.setContent(content));
        return commentRepository.save(findComment);
    }

    public Comment findComment(long commentId){
        return findVerifiedComment(commentId);
    }

    public List<Comment> findComments() {
        return (List<Comment>) commentRepository.findAll();
    }

    public void deleteComment(long commentId){
        Comment findComment = findVerifiedComment(commentId);

        commentRepository.delete(findComment);
    }

    public Comment findVerifiedComment(long commentId){
        Optional<Comment> comment = commentRepository.findById(commentId);
        Comment findComment = comment.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND)
                );
        return findComment;
    }
}
