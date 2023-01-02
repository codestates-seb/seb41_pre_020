package com.y2k.stackoverflow.answer.mapper;

import com.y2k.stackoverflow.answer.dto.AnswerPatchDto;
import com.y2k.stackoverflow.answer.dto.AnswerResponseDto;
import com.y2k.stackoverflow.answer.dto.AnswerVoteDto;
import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.answer.entity.AnswerVote;
import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.member.dto.MemberDto;
import com.y2k.stackoverflow.member.entity.Member;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-28T22:53:29+0900",
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

    @Override
    public List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<AnswerResponseDto> list = new ArrayList<AnswerResponseDto>( answers.size() );
        for ( Answer answer : answers ) {
            list.add( answerToAnswerResponseDto( answer ) );
        }

        return list;
    }

    protected MemberDto.Response memberToResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        long memberId = 0L;
        String displayName = null;
        String profileImage = null;
        Member.MemberStatus memberStatus = null;

        if ( member.getMemberId() != null ) {
            memberId = member.getMemberId();
        }
        displayName = member.getDisplayName();
        profileImage = member.getProfileImage();
        memberStatus = member.getMemberStatus();

        MemberDto.Response response = new MemberDto.Response( memberId, displayName, profileImage, memberStatus );

        return response;
    }

    protected CommentDto.CommentAnswerResponse commentToCommentAnswerResponse(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentDto.CommentAnswerResponse.CommentAnswerResponseBuilder commentAnswerResponse = CommentDto.CommentAnswerResponse.builder();

        commentAnswerResponse.commentId( comment.getCommentId() );
        commentAnswerResponse.content( comment.getContent() );
        commentAnswerResponse.member( memberToResponse( comment.getMember() ) );
        if ( comment.getCreatedAt() != null ) {
            commentAnswerResponse.createdAt( DateTimeFormatter.ISO_LOCAL_DATE_TIME.format( comment.getCreatedAt() ) );
        }
        commentAnswerResponse.commentType( comment.getCommentType() );

        return commentAnswerResponse.build();
    }

    protected List<CommentDto.CommentAnswerResponse> commentListToCommentAnswerResponseList(List<Comment> list) {
        if ( list == null ) {
            return null;
        }

        List<CommentDto.CommentAnswerResponse> list1 = new ArrayList<CommentDto.CommentAnswerResponse>( list.size() );
        for ( Comment comment : list ) {
            list1.add( commentToCommentAnswerResponse( comment ) );
        }

        return list1;
    }

    protected AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setCreatedAt( answer.getCreatedAt() );
        answerResponseDto.setModifiedAt( answer.getModifiedAt() );
        answerResponseDto.setAnswerId( answer.getAnswerId() );
        answerResponseDto.setContent( answer.getContent() );
        answerResponseDto.setVotes( answer.getVotes() );
        answerResponseDto.setAnswerCheck( answer.getAnswerCheck() );
        answerResponseDto.setMember( memberToResponse( answer.getMember() ) );
        answerResponseDto.setComments( commentListToCommentAnswerResponseList( answer.getComments() ) );

        return answerResponseDto;
    }
}
