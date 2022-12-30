package com.y2k.stackoverflow.question.mapper;

import com.y2k.stackoverflow.question.dto.QuestionVoteDto;
import com.y2k.stackoverflow.question.entity.QuestionVote;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-30T12:55:13+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.1.jar, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public QuestionVote questionVoteDtoToQuestionVote(QuestionVoteDto questionVoteDto) {
        if ( questionVoteDto == null ) {
            return null;
        }

        QuestionVote questionVote = new QuestionVote();

        questionVote.setVoteCheck( questionVoteDto.getVoteCheck() );

        return questionVote;
    }
}
