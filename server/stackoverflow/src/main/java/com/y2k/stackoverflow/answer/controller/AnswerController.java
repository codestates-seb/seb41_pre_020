package com.y2k.stackoverflow.answer.controller;

import com.y2k.stackoverflow.answer.dto.AnswerPatchDto;
import com.y2k.stackoverflow.answer.dto.AnswerPostDto;
import com.y2k.stackoverflow.answer.dto.AnswerResponseDto;
import com.y2k.stackoverflow.answer.dto.AnswersGetResponseDto;
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
import java.util.List;

@RestController
@RequestMapping("/questions")
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
    @PostMapping("/ask")
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPostDto) {
        Answer answer = answerService.createAnswer(answerMapper.answerPostDtoToAnswer(answerPostDto, questionService, memberService));

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(answer, memberMapper)),
                HttpStatus.CREATED);
    }

    /**
     * Answer 수정
     */
    @PatchMapping("/ask/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(answerMapper.answerPatchDtoToAnswer(answerPatchDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(answer, memberMapper))
                , HttpStatus.OK);
    }

    /**
     * 모든 Answer 조회 - 테스트용(삭제 예정)
     */
    @GetMapping("/ask")
    public ResponseEntity getAnswers() {
        List<Answer> answers = answerService.findAnswers();
        List<AnswerResponseDto> response = answerMapper.answersToAnswerResponseDtos(answers);

        return new ResponseEntity<>(
                new AnswersGetResponseDto<>(response),
                HttpStatus.OK);
    }

    /**
     * 특정 Answer 삭제
     */

    @DeleteMapping("/ask/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    /**
     * Answer 추천 기능
     * ▲  추천 +1
     * 회원마다 답변에 1개씩 추천 or 비추천 가능
     */
    @PostMapping("/ask/likes/{answer-id}")
    public ResponseEntity postLikeVoteAnswer(@PathVariable("answer-id") @Positive long answerId) {
        Answer voteAnswer = answerService.likeAnswerVote(answerId, memberService.getLoginMember());

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(voteAnswer, memberMapper)),
                HttpStatus.OK
        );


    }

    /**
     * Answer 비추천 기능
     * ▼  비추천 -1
     * 회원마다 답변에 1개씩 추천 or 비추천 가능
     */
    @PostMapping("/ask/dislikes/{answer-id}")
    public ResponseEntity postDislikeVoteAnswer(@PathVariable("answer-id") @Positive long answerId) {
        Answer voteAnswer = answerService.dislikeAnswerVote(answerId, memberService.getLoginMember());

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(voteAnswer, memberMapper)),
                HttpStatus.OK
        );

    }
}
