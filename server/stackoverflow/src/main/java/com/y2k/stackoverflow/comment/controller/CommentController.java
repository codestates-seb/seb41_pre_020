package com.y2k.stackoverflow.comment.controller;

import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.comment.mapper.CommentMapper;
import com.y2k.stackoverflow.comment.service.CommentService;
import com.y2k.stackoverflow.dto.SingleResponseDto;
import com.y2k.stackoverflow.exception.BusinessLogicException;
import com.y2k.stackoverflow.exception.ExceptionCode;
import com.y2k.stackoverflow.member.mapper.MemberMapper;
import com.y2k.stackoverflow.member.service.MemberService;
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

    private final MemberService memberService;

    private final MemberMapper memberMapper;

    public CommentController(CommentService commentService, CommentMapper mapper,
                             MemberService memberService, MemberMapper memberMapper) {
        this.commentService = commentService;
        this.mapper = mapper;
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping("/question/{question-id}")
    public ResponseEntity postQuestionComment(@RequestBody CommentDto.Post commentPost,
                                              @PathVariable("question-id")@Positive long questionId){

//        String content = commentPost.getContent();
//        Comment.CommentType commentType = commentPost.getCommentType();
//        Comment comment = commentService.createQuestionComment(content, questionId, commentType);
//        CommentDto.Response response = mapper.commentToCommentResponse(comment);


//
        Comment comment = mapper.commentPostToComment(commentPost, memberService);

        Comment createComment = commentService.createQuestionComment(comment, questionId);

        CommentDto.Response response = mapper.commentToCommentResponse(createComment,memberMapper);

        return new ResponseEntity<> (new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @PostMapping("/answer/{answer-id}")
    public ResponseEntity postAnswerComment(@RequestBody CommentDto.Post commentPost,
                                            @PathVariable("answer-id")@Positive long answerId){
        Comment comment = mapper.commentPostToComment(commentPost, memberService);

        Comment createComment = commentService.createAnswerComment(comment, answerId);

        CommentDto.Response response = mapper.commentToCommentResponse(createComment, memberMapper);

        return new ResponseEntity<> (new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @PatchMapping("/question/{comment-id}")
    public ResponseEntity patchQuestionComment(@PathVariable("comment-id") @Positive long commentId,
                                               @RequestBody CommentDto.Patch commentPatch){


        commentPatch.setCommentId(commentId);
        Comment comment = commentService.updateComment(mapper.commentPatchToComment(commentPatch));
        CommentDto.Response response = mapper.commentToCommentResponse(comment, memberMapper);

        //answer Patch 불가능하게 에러 출력
        if(comment.getCommentType() == Comment.CommentType.ANSWER) throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_PATCHED);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/answer/{comment-id}")
    public ResponseEntity patchAnswerComment(@PathVariable("comment-id") @Positive long commentId,
                                             @RequestBody CommentDto.Patch commentPatch){

        commentPatch.setCommentId(commentId);
        Comment comment = commentService.updateComment(mapper.commentPatchToComment(commentPatch));
        CommentDto.Response response = mapper.commentToCommentResponse(comment, memberMapper);

        //question Patch 불가능하게 에러 출력
        if(comment.getCommentType() == Comment.CommentType.QUESTION) throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_PATCHED);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }



    @GetMapping("/question")
    public ResponseEntity getQuestionComments(){

        List<Comment> comments = commentService.findComments();

        List<CommentDto.Response> response =
                comments.stream()
                        .filter(comment -> comment.getCommentType() == Comment.CommentType.QUESTION)
                        .map(comment -> mapper.commentToCommentResponse(comment, memberMapper))
                        .collect(Collectors.toList());


        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/answer")
    public ResponseEntity getAnswerComments(){

        List<Comment> comments = commentService.findComments();

        List<CommentDto.Response> response =
                comments.stream().filter(comment -> comment.getCommentType() == Comment.CommentType.ANSWER)
                        .map(comment -> mapper.commentToCommentResponse(comment, memberMapper))
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
