package com.y2k.stackoverflow.answer.controller;

import com.y2k.stackoverflow.answer.dto.*;
import com.y2k.stackoverflow.answer.entity.Answer;
import com.y2k.stackoverflow.answer.mapper.AnswerMapper;
import com.y2k.stackoverflow.answer.service.AnswerService;
import com.y2k.stackoverflow.dto.SingleResponseDto;
import com.y2k.stackoverflow.member.mapper.MemberMapper;
import com.y2k.stackoverflow.member.service.MemberService;
import com.y2k.stackoverflow.question.service.QuestionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/answers")
@Slf4j
@Validated
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final QuestionService questionService;
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper,
                            QuestionService questionService,
                            MemberService memberService, MemberMapper memberMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
        this.questionService = questionService;
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    /**
     * Answer 등록
     */
    @PostMapping("/{question-id}/add")
    public ResponseEntity postAnswer(@PathVariable("question-id") @Positive long questionId,
                                     @RequestBody AnswerPostDto answerPostDto) {
        answerPostDto.setQuestionId(questionId);
        Answer answer = answerService.createAnswer(answerMapper.answerPostDtoToAnswer(answerPostDto, questionService, memberService));
        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(answer, memberMapper)),
                HttpStatus.CREATED);
    }

    /**
     * Answer 수정
     */
    @PatchMapping("/{answer-id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(answerMapper.answerPatchDtoToAnswer(answerPatchDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(answer, memberMapper))
                , HttpStatus.OK);
    }


    /**
     * 특정 Answer 삭제
     */

    @DeleteMapping("/{answer-id}/delete")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    /**
     * Answer 추천 & 비추천 기능
     * request 값으로 보낼 voteCount가 0이면 비추천, 1이면 추천
     * 회원마다 답변에 1개씩 추천 or 비추천 가능
     */
    @PostMapping("/ask/likes/{answer-id}")
    public ResponseEntity likeVoteAnswer(@PathVariable("answer-id") @Positive long answerId,
                                         @Valid @RequestBody AnswerVoteDto answerVoteDto) {
        Answer answer = answerService.likeAnswerVote(
                answerId,
                memberService.getLoginMember(),
                answerMapper.answerVoteDtoToAnswerVote(answerVoteDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(answer, memberMapper)),
                HttpStatus.OK
        );
    }

    /**
     * Question - Answer 채택 기능
     * request 값으로 보낼 questionId, answerId로 채택 여부 판단해, 채택할 answer 응답
     */
    @PostMapping("/ask/check")
    public ResponseEntity checkAnswer(@Valid @RequestBody AnswerCheckDto answerCheckDto) {
        Answer checkAnswer = answerService.findCheckAnswer(answerCheckDto.getAnswerId());

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(checkAnswer, memberMapper)),
                        HttpStatus.OK);
    }


}
