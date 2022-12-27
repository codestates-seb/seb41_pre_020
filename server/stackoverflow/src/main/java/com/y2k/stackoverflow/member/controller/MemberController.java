package com.y2k.stackoverflow.member.controller;

import com.y2k.stackoverflow.dto.MultiResponseDto;
import com.y2k.stackoverflow.member.dto.MemberDto;
import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.member.mapper.MemberMapper;
import com.y2k.stackoverflow.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/members")
@Validated
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;

    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post post) {
        memberService.join(mapper.memberPostToMember(post));
        return new ResponseEntity(HttpStatus.CREATED);
    }

    //myPage - profile 화면
    @PatchMapping("/edit/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                      @Valid @RequestBody MemberDto.Patch patch) {

        patch.setMemberId(memberId);
        Member updatedMember = memberService.updateMember(mapper.memberPatchToMember(patch));
        return new ResponseEntity(mapper.memberToDetailsResponseDto(updatedMember), HttpStatus.OK);
    }

    //(비회원/회원용)home -> users 탭 -> 유저 클릭시 화면
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
        Member member = memberService.findMember(memberId);
        return new ResponseEntity(mapper.memberToDetailsResponseDto(member), HttpStatus.OK);
    }

    //(비회원/회원용) home -> users 탭
    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Member> pageMembers = memberService.findMembers(page-1, size);
        List<Member> members = pageMembers.getContent();
        return new ResponseEntity(new MultiResponseDto<>(mapper.membersToResponseDto(members), pageMembers), HttpStatus.OK);
    }

    //관리자용 (탈퇴/휴면 회원 모두 조회)
    @GetMapping("/all")
    public ResponseEntity getAllMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Member> pageMembers = memberService.findAllMembers(page-1, size);
        List<Member> members = pageMembers.getContent();
        return new ResponseEntity(new MultiResponseDto<>(mapper.membersToResponseDto(members), pageMembers), HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId) {
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //마이페이지 - profile 화면
    @GetMapping("/edit/{member-id}")
    public ResponseEntity getMyPage(@PathVariable("member-id") @Positive long memberId) {

        Member member = memberService.findMember(memberId);
        return new ResponseEntity(mapper.memberToDetailsResponseDto(member), HttpStatus.OK);
    }
}
