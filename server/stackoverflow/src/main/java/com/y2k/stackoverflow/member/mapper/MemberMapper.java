package com.y2k.stackoverflow.member.mapper;

import com.y2k.stackoverflow.member.dto.MemberDto;
import com.y2k.stackoverflow.member.dto.mypage.MyPageAnswer;
import com.y2k.stackoverflow.member.dto.mypage.MyPageQuestion;
import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.question.entity.Question;
import com.y2k.stackoverflow.question.entity.QuestionTag;
import com.y2k.stackoverflow.util.DateUtil;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostToMember(MemberDto.Post post);

    Member memberPatchToMember(MemberDto.Patch patch);

    MemberDto.Response memberToResponseDto(Member member);

    //MemberDto.DetailsResponse memberToDetailsResponseDto(Member member);
    default MemberDto.DetailsResponse memberToDetailsResponseDto(Member member) {
        MemberDto.DetailsResponse detailsResponse = new MemberDto.DetailsResponse();
        detailsResponse.setMemberId(member.getMemberId());
        detailsResponse.setDisplayName(member.getDisplayName());
        detailsResponse.setProfileImage(member.getProfileImage());
        detailsResponse.setMemberStatus(member.getMemberStatus());
        detailsResponse.setCreatedAt(DateUtil.convertLocalDatetimeToTime(member.getCreatedAt()));
        detailsResponse.setModifiedAt(DateUtil.convertLocalDatetimeToTime(member.getModifiedAt()));
        detailsResponse.setUserProfile(member.getUserProfile());

        return detailsResponse;
    }
    List<MemberDto.Response> membersToResponseDto(List<Member> members);

    default MemberDto.MyPageResponse memberToMyPageResponse (Member member) {
        // member //
        MemberDto.MyPageResponse myPageResponse = new MemberDto.MyPageResponse(
                member.getMemberId(), member.getDisplayName(), member.getProfileImage(), member.getMemberStatus()
        );
        myPageResponse.setCreatedAt(DateUtil.convertLocalDatetimeToTime(member.getCreatedAt()));
        myPageResponse.setModifiedAt(DateUtil.convertLocalDatetimeToTime(member.getModifiedAt()));



        Set<String> questionTags = new HashSet<>();

        // questions //
        member.getQuestions().forEach(question -> {
                     MyPageQuestion myPageQuestion = new MyPageQuestion();
                    myPageQuestion.setQuestionId(question.getQuestionId());
                    myPageQuestion.setQuestionTitle(question.getTitle());
                    myPageQuestion.setQuestionVotes(question.getVotes());
                    myPageQuestion.setQuestionCreatedAt(
                            question.getCreatedAt().getMonth().toString().substring(0, 3) + " " +
                            question.getCreatedAt().getDayOfMonth() + ", " +
                            question.getCreatedAt().getYear()
                    );
                    // tags //
                    question.getQuestionTags().forEach(tag -> {
                        questionTags.add(tag.getTagName());
                    });
                     myPageResponse.getQuestions().add(myPageQuestion);
                }
        );

        // answers //
        member.getAnswers().forEach(answer -> {
                 MyPageAnswer myPageAnswer = new MyPageAnswer();
                // 마이페이지 answer title == question title
                myPageAnswer.setAnswerTitle(answer.getQuestion().getTitle());
                myPageAnswer.setAnswerId(answer.getAnswerId());
                myPageAnswer.setAnswerVotes(answer.getVotes());
                myPageAnswer.setAnswerCreatedAt(
                        answer.getCreatedAt().getMonth().toString().substring(0, 3) + " " +
                        answer.getCreatedAt().getDayOfMonth() + ", " +
                        answer.getCreatedAt().getYear()
            );
            // tags //
            answer.getQuestion().getQuestionTags().forEach(tag -> {
                questionTags.add(tag.getTagName());
            });
            myPageResponse.getAnswers().add(myPageAnswer);
        });

        questionTags.forEach(tag -> myPageResponse.getTags().add(tag));

        myPageResponse.setAnswersTotal(myPageResponse.getAnswers().size());
        myPageResponse.setQuestionsTotal(myPageResponse.getQuestions().size());
        myPageResponse.setTagTotal(questionTags.size());

        return myPageResponse;
    }
}
