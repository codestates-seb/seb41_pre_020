package com.y2k.stackoverflow.answer.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class AnswersGetResponseDto<T> {
    private List<T> data;

    public AnswersGetResponseDto(List<T> data) {
        this.data = data;
    }
}
