package com.y2k.stackoverflow.member.mapper;

import com.y2k.stackoverflow.member.dto.MemberDto;
import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.util.DateUtil;
import org.mapstruct.Mapper;

import java.util.List;

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

}
