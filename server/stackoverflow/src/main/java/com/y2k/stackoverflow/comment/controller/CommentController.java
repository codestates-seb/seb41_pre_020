package com.y2k.stackoverflow.comment.controller;

import com.y2k.stackoverflow.comment.dto.CommentPatchDto;
import com.y2k.stackoverflow.comment.dto.CommentPostDto;
import com.y2k.stackoverflow.comment.dto.CommentResponseDto;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.comment.mapper.CommentMapper;
import com.y2k.stackoverflow.comment.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/comments")
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper mapper;

    public CommentController(CommentService commentService, CommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }



    @PostMapping
    public ResponseEntity postComment(@RequestBody CommentPostDto commentPostDto){
        Comment comment = mapper.commentPostDtoToComment(commentPostDto);

        Comment response = commentService.createComment(comment);

        return new ResponseEntity<> (mapper.commentToCommentResponseDto(response), HttpStatus.CREATED);
    }

    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment(@PathVariable("comment-id") @Positive long commentId,
                                       @RequestBody CommentPatchDto commentPatchDto){

        commentPatchDto.setCommentId(commentId);
        Comment comment = commentService.updateComment(mapper.commentPatchDtoToComment(commentPatchDto));

        return new ResponseEntity<>(mapper.commentToCommentResponseDto(comment), HttpStatus.OK);
    }

    @GetMapping("/{comment-id}")
    public ResponseEntity getComment(@PathVariable("comment-id") @Positive long commentId){

        Comment response = commentService.findComment(commentId);

        return new ResponseEntity<>(mapper.commentToCommentResponseDto(response), HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity getComments(){

        List<Comment> comments = commentService.findComments();

        List<CommentResponseDto> response =
                comments.stream()
                        .map(comment -> mapper.commentToCommentResponseDto(comment))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment(@PathVariable("comment-id") @Positive long commentId){
        System.out.println("# delete comment");

        commentService.deleteComment(commentId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
