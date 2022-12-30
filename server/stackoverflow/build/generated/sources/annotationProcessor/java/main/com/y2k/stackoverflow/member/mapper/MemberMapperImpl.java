package com.y2k.stackoverflow.member.mapper;

import com.y2k.stackoverflow.member.dto.MemberDto;
import com.y2k.stackoverflow.member.entity.Member;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-30T12:55:13+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.1.jar, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostToMember(MemberDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Member member = new Member();

        member.setDisplayName( post.getDisplayName() );
        member.setEmail( post.getEmail() );
        member.setPassword( post.getPassword() );

        return member;
    }

    @Override
    public Member memberPatchToMember(MemberDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( patch.getMemberId() );
        member.setDisplayName( patch.getDisplayName() );
        member.setPassword( patch.getPassword() );
        member.setUserProfile( patch.getUserProfile() );

        return member;
    }

    @Override
    public MemberDto.Response memberToResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        long memberId = 0L;
        String displayName = null;
        String profileImage = null;
        Member.MemberStatus memberStatus = null;

        if ( member.getMemberId() != null ) {
            memberId = member.getMemberId();
        }
        displayName = member.getDisplayName();
        profileImage = member.getProfileImage();
        memberStatus = member.getMemberStatus();

        MemberDto.Response response = new MemberDto.Response( memberId, displayName, profileImage, memberStatus );

        return response;
    }

    @Override
    public List<MemberDto.Response> membersToResponseDto(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberDto.Response> list = new ArrayList<MemberDto.Response>( members.size() );
        for ( Member member : members ) {
            list.add( memberToResponseDto( member ) );
        }

        return list;
    }
}
