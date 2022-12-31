package com.y2k.stackoverflow.question.controller;

import com.y2k.stackoverflow.answer.mapper.AnswerMapper;
import com.y2k.stackoverflow.answer.service.AnswerService;
import com.y2k.stackoverflow.dto.MultiResponseDto;
import com.y2k.stackoverflow.dto.SingleResponseDto;
import com.y2k.stackoverflow.member.mapper.MemberMapper;
import com.y2k.stackoverflow.member.service.MemberService;
import com.y2k.stackoverflow.question.dto.QuestionPatchDto;
import com.y2k.stackoverflow.question.dto.QuestionPostDto;
import com.y2k.stackoverflow.question.entity.Question;
import com.y2k.stackoverflow.question.mapper.QuestionMapper;
import com.y2k.stackoverflow.question.service.QuestionService;
import com.y2k.stackoverflow.question.service.QuestionTagService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@RequestMapping("/questions")
@Slf4j
@Validated
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final MemberMapper memberMapper;
    private final MemberService memberService;
    private final QuestionTagService questionTagService;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper, QuestionTagService questionTagService,
                              AnswerService answerService, AnswerMapper answerMapper,
                              MemberMapper memberMapper, MemberService memberService) {

        this.questionService = questionService;
        this.questionMapper = questionMapper;
        this.questionTagService = questionTagService;
        this.answerService = answerService;
        this.answerMapper = answerMapper;
        this.memberMapper = memberMapper;
        this.memberService = memberService;
    }

    /**
     * Question 등록
     */
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(questionPostDto, memberService));

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(question, memberMapper, answerService)),
                HttpStatus.CREATED);
    }

    /**
     * Question 수정
     */
    @PatchMapping ("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(questionMapper.questionPatchDtoToQuestion(questionPatchDto, memberService));
        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(question, memberMapper, answerService))
                ,HttpStatus.OK);
    }

    /**
     * 특정 Question 조회 - 질문에 속해 있는 답변까지
     */
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findVotePlusQuestion(questionId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionAnswerResponseDto(question, answerService, answerMapper, memberMapper, questionTagService)),
                HttpStatus.OK);
    }

    /**
     * 모든 Question 조회
     */
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size,
                                       @RequestParam String sort) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1 , size, sort);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDtos(questions, answerService, memberMapper, questionTagService), pageQuestions),
                HttpStatus.OK);
    }


    /**
     * 특정 Question 삭제
     */
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


    /**
     * Question 추천 기능
     * ▲  추천 +1
     * 회원마다 질문에 1개씩 추천 or 비추천 가능
     */
    @PostMapping("/{question-id}/up-vote")
    public ResponseEntity upVoteQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question voteQuestion = questionService.upVoteQuestion(questionId, memberService.getLoginMember());

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(voteQuestion, memberMapper, answerService)),
                HttpStatus.OK);
    }


    /**
     * Question 비추천 기능
     * ▼  비추천 -1
     * 회원마다 질문에 1개씩 추천 or 비추천 가능
     */
    @PostMapping("/{question-Id}/down-vote")
    public ResponseEntity downVoteQuestion(@PathVariable("question-Id") @Positive long questionId) {
        Question voteQuestion = questionService.downVoteQuestion(questionId, memberService.getLoginMember());

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(voteQuestion, memberMapper, answerService)),
                HttpStatus.OK);
    }

    /**
     * Question 검색 기능
     */
    @GetMapping("/search")
    public ResponseEntity searchQuestion(@RequestParam String keyword,
                                         @Positive @RequestParam int page,
                                         @Positive @RequestParam int size,
                                         @RequestParam String sort
                                       ) {
        Page<Question> pageQuestions = questionService.searchQuestion(page - 1 , size, sort, keyword);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDtos(questions, answerService, memberMapper, questionTagService), pageQuestions),
                HttpStatus.OK);
    }


}
