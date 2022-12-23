package com.y2k.stackoverflow.answer.mapper;

import com.y2k.stackoverflow.answer.dto.AnswerPatchDto;
import com.y2k.stackoverflow.answer.dto.AnswerPostDto;
import com.y2k.stackoverflow.answer.dto.AnswerResponseDto;
import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.question.service.QuestionService;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(AnswerPostDto postDto, QuestionService questionService) {
        Answer answer = new Answer();
        answer.setContent(postDto.getContent());
        answer.setVotes(0);
        answer.setQuestion(questionService.findVerifiedQuestion(postDto.getQuestionId()));
        return answer;
    }

    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setVotes(answer.getVotes());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());
        answerResponseDto.setModifiedAt(answer.getModifiedAt());
        return answerResponseDto;
    }
    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);

}
