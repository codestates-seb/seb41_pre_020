package com.y2k.stackoverflow.auth.refresh;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class LogoutDto {

    @NotBlank
    private String accessToken;
    @NotBlank
    private String refreshToken;
}
