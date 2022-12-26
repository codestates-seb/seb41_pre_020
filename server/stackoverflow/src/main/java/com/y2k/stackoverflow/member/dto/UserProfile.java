package com.y2k.stackoverflow.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.Embeddable;

@Getter
@Embeddable
@AllArgsConstructor
public class UserProfile {

    private String location;

    private String title;

    private String aboutMe;

    protected UserProfile() {}
}
