package com.y2k.stackoverflow.answer.mapper;

import com.y2k.stackoverflow.answer.dto.AnswerPatchDto;
import com.y2k.stackoverflow.answer.dto.AnswerVoteDto;
import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.answer.entity.AnswerVote;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-30T12:55:13+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.1.jar, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public AnswerVote answerVoteDtoToAnswerVote(AnswerVoteDto answerVoteDto) {
        if ( answerVoteDto == null ) {
            return null;
        }

        AnswerVote answerVote = new AnswerVote();

        answerVote.setVoteCheck( answerVoteDto.getVoteCheck() );

        return answerVote;
    }

    @Override
    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerId( answerPatchDto.getAnswerId() );
        answer.setContent( answerPatchDto.getContent() );

        return answer;
    }
}
