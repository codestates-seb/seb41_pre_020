package com.y2k.stackoverflow.answer.mapper;

import com.y2k.stackoverflow.answer.dto.*;
import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.answer.entity.AnswerVote;
import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.member.mapper.MemberMapper;
import com.y2k.stackoverflow.member.service.MemberService;
import com.y2k.stackoverflow.question.service.QuestionService;
import com.y2k.stackoverflow.util.DateUtil;
import org.mapstruct.Mapper;

import java.util.List;
<<<<<<< HEAD
import java.util.Objects;
=======
>>>>>>> 3fbe76000783e252a46816c4084377de4de6bb2a
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    AnswerVote answerVoteDtoToAnswerVote(AnswerVoteDto answerVoteDto);

    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto, QuestionService questionService, MemberService memberService) {
        Answer answer = new Answer();

        //로그인한 회원이 질문 작성할 수 있게 설정
        answer.setMember(memberService.getLoginMember());
        answer.setContent(answerPostDto.getContent());
        answer.setVotes(0);
        answer.setQuestion(questionService.findQuestion(answerPostDto.getQuestionId()));
        answer.setAnswerCheck(false); // 채택 기본 값 세팅

        //회원 마이페이지 설정
        Member member = memberService.getLoginMember();
        member.addAnswer(answer);

        return answer;
    }

    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer, MemberMapper memberMapper) {
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setVotes(answer.getVotes());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());
        answerResponseDto.setModifiedAt(answer.getModifiedAt());
        answerResponseDto.setAnswerCheck(answer.getAnswerCheck());

<<<<<<< HEAD
        answerResponseDto.setComments(commentToCommentAnswerResponseDto(answer.getComments(), memberMapper, answer)); // 제웅 추가
=======
>>>>>>> 3fbe76000783e252a46816c4084377de4de6bb2a
        //멤버 설정 부분
        answerResponseDto.setMember(memberMapper.memberToResponseDto(answer.getMember()));
        return answerResponseDto;
    }

<<<<<<< HEAD


    default List<CommentDto.CommentAnswerResponse> commentToCommentAnswerResponseDto(List<Comment> comments, MemberMapper memberMapper, Answer answer){
        return comments
                .stream()
                .filter(comment -> comment.getCommentType() == Comment.CommentType.ANSWER)
                .filter(comment -> Objects.equals(comment.getAnswer().getAnswerId(), answer.getAnswerId()))
=======
//    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);
    default List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers, MemberMapper memberMapper){
        return answers
                .stream()
                .map(answer -> AnswerResponseDto
                        .builder()
                        .answerId(answer.getAnswerId())
                        .content(answer.getContent())
                        .votes(answer.getVotes())
                        .answerCheck(answer.getAnswerCheck())
                        .createdAt(DateUtil.convertLocalDatetimeToTime(answer.getCreatedAt()))
                        .modifiedAt(DateUtil.convertLocalDatetimeToTime(answer.getModifiedAt()))
                        .member(memberMapper.memberToResponseDto(answer.getMember()))
                        .comments(commentToCommentAnswerResponseDto(answer.getComments(), memberMapper))
                        .build())
                .collect(Collectors.toList());
    }

    default List<CommentDto.CommentAnswerResponse> commentToCommentAnswerResponseDto(List<Comment> comments, MemberMapper memberMapper){
        return comments
                .stream()
>>>>>>> 3fbe76000783e252a46816c4084377de4de6bb2a
                .map(comment -> CommentDto.CommentAnswerResponse
                        .builder()
                        .commentId(comment.getCommentId())
                        .content(comment.getContent())
                        .answerId(comment.getAnswer().getAnswerId()) // 안나옴
                        .member(memberMapper.memberToResponseDto(comment.getMember()))
                        .createdAt(DateUtil.convertLocalDatetimeToTime(comment.getCreatedAt())) // 변경안됨
                        .lastModifiedAt(DateUtil.convertLocalDatetimeToTime(comment.getModifiedAt())) //안나옴
                        .commentType(comment.getCommentType())
                        .build()
                ).collect(Collectors.toList());  //제웅 추가
<<<<<<< HEAD

//        return comments
//                .stream()
//                .filter(comment -> comment.getCommentType() == Comment.CommentType.ANSWER)
//                .filter(comment -> Objects.equals(comment.getAnswer().getAnswerId(), answer.getAnswerId()))
//                .map(comment -> commentMapper.commentToCommentResponse(comment, memberMapper))
//                .map(comment -> CommentDto.CommentAnswerResponse
//                        .builder()
//                        .build()
//                ).collect(Collectors.toList());
=======
>>>>>>> 3fbe76000783e252a46816c4084377de4de6bb2a
    }
}
