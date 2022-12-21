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
@RequiredArgsConstructor
@Validated
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;

    @PostMapping("/new")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post post) {
        Member member = memberService.join(mapper.memberPostToMember(post));
        return new ResponseEntity(mapper.memberToResponseDto(member), HttpStatus.CREATED);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                      @Valid @RequestBody MemberDto.Patch patch) {

        patch.setMemberId(memberId);
        Member updatedMember = memberService.updateMember(mapper.memberPatchToMember(patch));
        return new ResponseEntity(mapper.memberToResponseDto(updatedMember), HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
        Member member = memberService.findMember(memberId);
        return new ResponseEntity(mapper.memberToResponseDto(member), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Member> pageMembers = memberService.findMembers(page-1, size);
        List<Member> members = pageMembers.getContent();
        return new ResponseEntity(new MultiResponseDto<>(mapper.membersToResponseDto(members), pageMembers), HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId) {
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
