package com.y2k.stackoverflow.question.controller;

import com.y2k.stackoverflow.answer.mapper.AnswerMapper;
import com.y2k.stackoverflow.answer.service.AnswerService;
import com.y2k.stackoverflow.dto.MultiResponseDto;
import com.y2k.stackoverflow.dto.SingleResponseDto;
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
    private final QuestionTagService questionTagService;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper, AnswerService answerService, AnswerMapper answerMapper, QuestionTagService questionTagService) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
        this.answerService = answerService;
        this.answerMapper = answerMapper;
        this.questionTagService = questionTagService;
    }

    /**
     * Question 등록
     */
    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionPostDto) {
        Question question = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(questionPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(question)),
                HttpStatus.CREATED);
    }

    /**
     * Question 수정 - - 질문을 작성한 멤버만 수정 가능하게 수정 필요 //
     */
    @PatchMapping ("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(questionMapper.questionPatchDtoToQuestion(questionPatchDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(question))
                ,HttpStatus.OK);
    }

    /**
     * 특정 Question 조회 - 질문에 속해 있는 답변까지
     */
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionAnswerResponseDto(question, answerService, answerMapper, questionTagService)),
                HttpStatus.OK);
    }

    /**
     * 모든 Question 조회
     */
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1 , size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDtos(questions), pageQuestions),
                HttpStatus.OK);
    }


    /**
     * 특정 Question 삭제 - 질문을 작성한 멤버만 삭제 가능하게 수정 필요 //
     */
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
