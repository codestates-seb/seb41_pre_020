package com.y2k.stackoverflow.question.mapper;

import com.y2k.stackoverflow.question.dto.*;
import com.y2k.stackoverflow.question.entity.Question;
import com.y2k.stackoverflow.question.entity.QuestionTag;
import com.y2k.stackoverflow.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        //멤버 관련 추후 주석 해제
        /*Member member = new Member();
        member.setMemberId(questionPostDto.getMemberId());*/

        question.setVotes(0);
        question.setViews(0);

        List<QuestionTag> questionTags = questionPostDto.getQuestionTags().stream()
                .map(questionTagDto -> {
                    QuestionTag questionTag = new QuestionTag();
                    Tag tag = new Tag();
                    tag.setTagId(questionTagDto.getTagId());
                    tag.setTagName(questionTagDto.getTagName());
                    questionTag.addQuestion(question);
                    questionTag.addTag(tag);
                    questionTag.setTagName(questionTagDto.getTagName());
                    return questionTag;
                }).collect(Collectors.toList());

        //question.setMember(member);
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        question.setQuestionTags(questionTags);

        return question;
    }

    default Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        Question question = new Question();
        //멤버 관련 추후 주석 해제
        /*Member member = new Member();
        member.setMemberId(questionPostDto.getMemberId());*/

        question.setVotes(0);
        question.setViews(0);

        List<QuestionTag> questionTags = questionPatchDto.getQuestionTags().stream()
                .map(questionTagDto -> {
                    QuestionTag questionTag = new QuestionTag();
                    Tag tag = new Tag();
                    tag.setTagId(questionTagDto.getTagId());
                    tag.setTagName(questionTagDto.getTagName());
                    questionTag.addQuestion(question);
                    questionTag.addTag(tag);
                    questionTag.setTagName(questionTagDto.getTagName());
                    return questionTag;
                }).collect(Collectors.toList());

        //question.setMember(member);
        question.setQuestionId(questionPatchDto.getQuestionId());
        question.setTitle(questionPatchDto.getTitle());
        question.setContent(questionPatchDto.getContent());
        question.setQuestionTags(questionTags);

        return question;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        List<QuestionTag> questionTags = question.getQuestionTags();

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setQuestionId(question.getQuestionId());
        //questionResponseDto.setMember(question.getMember());
        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setLastModifiedAt(question.getModifiedAt());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setVotes(question.getVotes());
        questionResponseDto.setViews(question.getViews());
        questionResponseDto.setQuestionTags(
                questionTagsToQuestionTagResponseDtos(questionTags)
        );

        return questionResponseDto;
    }

    default List<QuestionTagResponseDto> questionTagsToQuestionTagResponseDtos(List<QuestionTag> questionTags) {
        return questionTags
                .stream()
                .map(questionTag -> QuestionTagResponseDto
                        .builder()
                        .tagId(questionTag.getTag().getTagId())
                        .tagName(questionTag.getTag().getTagName())
                        .build()
                ).collect(Collectors.toList());
    }
}
