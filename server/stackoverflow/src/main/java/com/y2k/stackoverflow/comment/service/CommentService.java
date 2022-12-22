package com.y2k.stackoverflow.comment.service;

import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.comment.repository.CommentRepository;
import com.y2k.stackoverflow.exception.BusinessLogicException;
import com.y2k.stackoverflow.exception.ExceptionCode;
import com.y2k.stackoverflow.member.repository.MemberRepository;
import com.y2k.stackoverflow.member.service.MemberService;
import com.y2k.stackoverflow.question.repository.QuestionRepository;
import com.y2k.stackoverflow.question.service.QuestionService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final QuestionService questionService;
    private final QuestionRepository questionRepository;
    private final MemberService memberService;
    private final MemberRepository memberRepository;


//    private final AnswerService answerService; //나중에 추가★
//    private final AnswerRepository answerRepository;

    public CommentService(CommentRepository commentRepository, QuestionService questionService,
                          QuestionRepository questionRepository, MemberService memberService,
                          MemberRepository memberRepository) {
        this.commentRepository = commentRepository;
        this.questionService = questionService;
        this.questionRepository = questionRepository;
        this.memberService = memberService;
        this.memberRepository = memberRepository;
    }

    public Comment createComment(Comment comment){
        return commentRepository.save(comment);
    }



    public Comment createQuestionComment(Comment comment, long questionId){
//        Question question = questionService.findQuestion(questionId);
//        comment.setQuestion(question);
        comment.setQuestionId(questionId); //TODO: 나중에 제거
        comment.setMemberId(questionId); //TODO: 나중에 로그인한 맴버로 받아오도록 변경하기
        comment.setCommentType(Comment.CommentType.QUESTION);
        return commentRepository.save(comment);
   }

    public Comment createAnswerComment(Comment comment, long answerId){

        //TODO:answer만들어지면 만들기
        comment.setAnswerId(answerId); //TODO: 나중에 제거
        comment.setMemberId(answerId); //TODO: 나중에 로그인한 맴버로 받아오도록 변경하기
        comment.setCommentType(Comment.CommentType.ANSWER);
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
