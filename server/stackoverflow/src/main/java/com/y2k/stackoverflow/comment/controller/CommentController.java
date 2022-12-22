package com.y2k.stackoverflow.comment.controller;

import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.comment.mapper.CommentMapper;
import com.y2k.stackoverflow.comment.service.CommentService;
import com.y2k.stackoverflow.dto.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/comments")
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper mapper;

    public CommentController(CommentService commentService, CommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }

    @PostMapping("/question/{question-id}")
    public ResponseEntity postQuestionComment(@RequestBody CommentDto.Post commentPost,
                                              @PathVariable("question-id")@Positive long questionId){

        Comment comment = mapper.commentPostToComment(commentPost);

        Comment createComment = commentService.createQuestionComment(comment, questionId);

        CommentDto.Response response = mapper.commentToCommentResponse(createComment);

        return new ResponseEntity<> (new SingleResponseDto<>(response), HttpStatus.CREATED);
    }
    @PostMapping("/answer/{answer-id}")
    public ResponseEntity postAnswerComment(@RequestBody CommentDto.Post commentPost,
                                            @PathVariable("answer-id")@Positive long answerId){
        Comment comment = mapper.commentPostToComment(commentPost);

        Comment createComment = commentService.createAnswerComment(comment, answerId);

        CommentDto.Response response = mapper.commentToCommentResponse(createComment);

        return new ResponseEntity<> (new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment(@PathVariable("comment-id") @Positive long commentId,
                                       @RequestBody CommentDto.Patch commentPatch){

        commentPatch.setCommentId(commentId);
        Comment comment = commentService.updateComment(mapper.commentPatchToComment(commentPatch));
        CommentDto.Response response = mapper.commentToCommentResponse(comment);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getComments(){

        List<Comment> comments = commentService.findComments();

        List<CommentDto.Response> response =
                comments.stream()
                        .map(comment -> mapper.commentToCommentResponse(comment))
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
