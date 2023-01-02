package com.y2k.stackoverflow.auth.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class LoginDto {

    @NotBlank
    private String email;

    private String password;

}
