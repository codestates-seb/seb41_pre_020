package com.y2k.stackoverflow.member.mapper;

import com.y2k.stackoverflow.member.dto.MemberDto;
import com.y2k.stackoverflow.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostToMember(MemberDto.Post post);

    Member memberPatchToMember(MemberDto.Patch patch);

    MemberDto.Response memberToResponseDto(Member member);

    MemberDto.DetailsResponse memberToDetailsResponseDto(Member member);
    List<MemberDto.Response> membersToResponseDto(List<Member> members);

}
