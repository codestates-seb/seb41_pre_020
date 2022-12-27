package com.y2k.stackoverflow.member.dto.mypage;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class MyPageQuestion {
    private long questionId;
    private String QuestionTitle;
    private Integer questionVotes;
    private String questionCreatedAt;
}
