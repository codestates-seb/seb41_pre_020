package com.y2k.stackoverflow.member.dto.mypage;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter @Getter
@NoArgsConstructor
public class MyPageAnswer {
    private long answerId;
    private String answerTitle;
    private Integer answerVotes;
    private String answerCreatedAt;
}
