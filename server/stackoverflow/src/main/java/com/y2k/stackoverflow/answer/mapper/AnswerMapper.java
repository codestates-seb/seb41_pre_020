package com.y2k.stackoverflow.answer.mapper;

import com.y2k.stackoverflow.answer.dto.AnswerPatchDto;
import com.y2k.stackoverflow.answer.dto.AnswerPostDto;
import com.y2k.stackoverflow.answer.dto.AnswerResponseDto;
import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.member.mapper.MemberMapper;
import com.y2k.stackoverflow.member.service.MemberService;
import com.y2k.stackoverflow.question.service.QuestionService;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto, QuestionService questionService, MemberService memberService) {
        Answer answer = new Answer();

        //로그인한 회원이 질문 작성할 수 있게 설정
        answer.setMember(memberService.getLoginMember());
        answer.setContent(answerPostDto.getContent());
        answer.setVotes(0);
        answer.setQuestion(questionService.findVerifiedQuestion(answerPostDto.getQuestionId()));
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
        //멤버 설정 부분
        answerResponseDto.setMember(memberMapper.memberToResponseDto(answer.getMember()));
        return answerResponseDto;
    }
    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);

}
