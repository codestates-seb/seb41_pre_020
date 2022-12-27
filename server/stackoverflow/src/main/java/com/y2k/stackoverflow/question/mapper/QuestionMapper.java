package com.y2k.stackoverflow.question.mapper;

import com.y2k.stackoverflow.answer.dto.AnswersGetResponseDto;
import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.answer.mapper.AnswerMapper;
import com.y2k.stackoverflow.answer.service.AnswerService;
import com.y2k.stackoverflow.comment.dto.CommentDto;
import com.y2k.stackoverflow.comment.entity.Comment;
import com.y2k.stackoverflow.member.mapper.MemberMapper;
import com.y2k.stackoverflow.member.service.MemberService;
import com.y2k.stackoverflow.question.dto.*;
import com.y2k.stackoverflow.question.entity.Question;
import com.y2k.stackoverflow.question.entity.QuestionTag;
import com.y2k.stackoverflow.question.entity.QuestionVote;
import com.y2k.stackoverflow.question.service.QuestionService;
import com.y2k.stackoverflow.question.service.QuestionTagService;
import com.y2k.stackoverflow.util.DateUtil;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    QuestionVote questionVoteDtoToQuestionVote(QuestionVoteDto questionVoteDto);
    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto, MemberService memberService) {
        Question question = new Question();

        //로그인한 회원이 질문 작성할 수 있게 설정
        question.setMember(memberService.getLoginMember());
        question.setVotes(0);
        question.setViews(0);


        List<QuestionTag> questionTags = questionPostDto.getQuestionTags().stream()
                .map(questionTagDto -> {
                    QuestionTag questionTag = new QuestionTag();
                    questionTag.setQuestionTagId(questionTagDto.getTagId());
                    questionTag.setTagName(questionTagDto.getTagName());
                    questionTag.addQuestion(question);
                    questionTag.setMember(memberService.getLoginMember());
                    questionTag.setTagName(questionTagDto.getTagName());
                    return questionTag;
                }).collect(Collectors.toList());

        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        question.setQuestionTags(questionTags);
        question.setQuestionCheck(false); //채택 기본값 세팅

        return question;
    }

    default Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto, MemberService memberService) {
        Question question = new Question();

        List<QuestionTag> questionTags = questionPatchDto.getQuestionTags().stream()
                .map(questionTagDto -> {
                    QuestionTag questionTag = new QuestionTag();
                    questionTag.setQuestionTagId(questionTag.getQuestionTagId());
                    questionTag.setTagName(questionTag.getTagName());
                    questionTag.addQuestion(question);
                    questionTag.setMember(memberService.getLoginMember());
                    questionTag.setTagName(questionTagDto.getTagName());
                    return questionTag;
                }).collect(Collectors.toList());
        if(questionPatchDto.getQuestionTags() == null) {
            question.setQuestionTags(new ArrayList<>());
        }
        question.setQuestionId(questionPatchDto.getQuestionId());
        question.setTitle(questionPatchDto.getTitle());
        question.setContent(questionPatchDto.getContent());
        question.setQuestionTags(questionTags);
        return question;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question, MemberMapper memberMapper, AnswerService answerService) {
        List<QuestionTag> questionTags = question.getQuestionTags();

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setVotes(question.getVotes());
        questionResponseDto.setViews(question.getViews());
        questionResponseDto.setQuestionCheck(question.getQuestionCheck());
        List<Answer> answerList = answerService.findAnswersQuestion(question);
        questionResponseDto.setAnswers(answerList.size());
        questionResponseDto.setQuestionTags(
                questionTagsToQuestionTagResponseDtos(questionTags)
        );
        //멤버 설정 부분
        questionResponseDto.setMember(memberMapper.memberToResponseDto(question.getMember()));

        return questionResponseDto;
    }

    default List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions, AnswerService answerService, MemberMapper memberMapper, QuestionService questionService, QuestionTagService questionTagService){
        return questions
                .stream()
                .map(question -> QuestionResponseDto
                        .builder()
                        .questionId(question.getQuestionId())
                        .title(question.getTitle())
                        .content(question.getContent())
                        .createdAt(DateUtil.convertLocalDatetimeToTime(question.getCreatedAt()))
                        .lastModifiedAt(DateUtil.convertLocalDatetimeToTime(question.getModifiedAt()))
                        .views(question.getViews())
                        .votes(question.getVotes())
                        .questionTags(questionTagsToQuestionTagResponseDtos(questionTagService.findVerifiedQuestionTag(question)))
                        .answers(answerService.findAnswersQuestion(question).size())
                        .questions(questionService.getQuestionsCount())
                        .member(memberMapper.memberToResponseDto(question.getMember()))
                        .build()
                ).collect(Collectors.toList());
    }

    default List<QuestionTagResponseDto> questionTagsToQuestionTagResponseDtos(List<QuestionTag> questionTags) {
        return questionTags
                .stream()
                .map(questionTag -> QuestionTagResponseDto
                        .builder()
                        .tagId(questionTag.getQuestionTagId())
                        .tagName(questionTag.getTagName())
                        .build()
                ).collect(Collectors.toList());
    }

    //제웅 추가

    default List<CommentDto.Response> commentToCommentQuestionResponseDto(List<Comment> comments, MemberMapper memberMapper, Question question){
        return comments
                .stream()
                .filter(comment -> comment.getCommentType() == Comment.CommentType.QUESTION)
                .filter(comment -> Objects.equals(comment.getQuestion().getQuestionId(), question.getQuestionId()))
                .map(comment -> CommentDto.Response
                        .builder()
                        .commentId(comment.getCommentId())
                        .content(comment.getContent())
                        .questionId(comment.getQuestion().getQuestionId())
                        .member(memberMapper.memberToResponseDto(comment.getMember()))
                        .createdAt(DateUtil.convertLocalDatetimeToTime(comment.getCreatedAt()))
                        .lastModifiedAt(DateUtil.convertLocalDatetimeToTime(comment.getModifiedAt()))
                        .commentType(comment.getCommentType())
                        .build()
                ).collect(Collectors.toList());
    }


    /**
     * 질문-답변 함께 출력 위한 mapper
     */
    default QuestionAnswerResponseDto questionToQuestionAnswerResponseDto(Question question,
                                                                          AnswerService answerService,
                                                                          AnswerMapper answerMapper,
                                                                          MemberMapper memberMapper,
                                                                          QuestionTagService questionTagService
                                                                          ) {
        QuestionAnswerResponseDto questionAnswerResponseDto = new QuestionAnswerResponseDto();
        questionAnswerResponseDto.setQuestionId(question.getQuestionId());
        questionAnswerResponseDto.setTitle(question.getTitle());
        questionAnswerResponseDto.setContent(question.getContent());
        questionAnswerResponseDto.setCreatedAt(question.getCreatedAt());
        questionAnswerResponseDto.setLastModifiedAt(question.getModifiedAt());
        questionAnswerResponseDto.setViews(question.getViews());
        questionAnswerResponseDto.setVotes(question.getVotes());
        questionAnswerResponseDto.setQuestionCheck(question.getQuestionCheck());


        questionAnswerResponseDto.setComments(commentToCommentQuestionResponseDto(question.getComments(), memberMapper, question)); //제웅 추가


        //질문 수정 시 태그 중복 등록 문제 해결
        List<QuestionTag> questionTags = questionTagService.findVerifiedQuestionTag(question);
        questionAnswerResponseDto.setQuestionTags(questionTagsToQuestionTagResponseDtos(questionTags));

        questionAnswerResponseDto.setMember(memberMapper.memberToResponseDto(question.getMember()));

        List<Answer> answerList = answerService.findAnswersQuestion(question);
        questionAnswerResponseDto.setAnswers(answerList.size());
        questionAnswerResponseDto.setAnswerList(new AnswersGetResponseDto<>(
                answerMapper.answersToAnswerResponseDtos(answerList)
        ));

        return questionAnswerResponseDto;
    }
}
