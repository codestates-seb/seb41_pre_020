package com.y2k.stackoverflow.comment.service;

import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.answer.service.AnswerService;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.comment.repository.CommentRepository;
import com.y2k.stackoverflow.exception.BusinessLogicException;
import com.y2k.stackoverflow.exception.ExceptionCode;
import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.member.service.MemberService;
import com.y2k.stackoverflow.question.entity.Question;
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
    private final AnswerService answerService; //나중에 추가★
    private final MemberService memberService;


    public CommentService(CommentRepository commentRepository, QuestionService questionService,
                          QuestionRepository questionRepository, AnswerService answerService,
                          MemberService memberService) {
        this.commentRepository = commentRepository;
        this.questionService = questionService;
        this.questionRepository = questionRepository;
        this.answerService = answerService;
        this.memberService = memberService;
    }

    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }


    //    public Comment createQuestionComment(String content, long questionId, Comment.CommentType commentType){
//        Question question = questionService.findQuestion(questionId);
//        Comment saveComment = new Comment(content, question, commentType);
//        return commentRepository.save(saveComment);
//    }
    public Comment createQuestionComment(Comment comment, long questionId){

        Question question = questionService.findQuestion(questionId);

//        questionService.findVerifiedQuestion(questionId);

//        comment.setQuestion(findQuestion);

//        comment.setQuestion(questionId); //TODO: 나중에 제거
//        comment.setMember(questionId); //TODO: 나중에 로그인한 맴버로 받아오도록 변경하기
        comment.setQuestion(question);

        comment.setCommentType(Comment.CommentType.QUESTION);

        //question.getComments().add(comment); // post 두번 요청 범인
        questionRepository.save(question);

        return commentRepository.save(comment);
    }

    public Comment createAnswerComment(Comment comment, long answerId){

        //TODO:answer만들어지면 만들기
        Answer answer = answerService.findAnswer(answerId);
        comment.setAnswer(answer);
//        comment.setAnswer(answerId); //TODO: 나중에 제거
//        comment.setMember(answerId); //TODO: 나중에 로그인한 맴버로 받아오도록 변경하기
        comment.setCommentType(Comment.CommentType.ANSWER);
        return commentRepository.save(comment);
    }

    public Comment updateComment(Comment comment){
        Comment findComment = findVerifiedComment(comment.getCommentId());

        Member member = memberService.findMember(findComment.getMember().getMemberId());

        if(member.getMemberId() != memberService.getLoginMember().getMemberId()){
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED);
        }
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

        if(findComment.getMember().getMemberId() != memberService.getLoginMember().getMemberId()){
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED);
        }

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
