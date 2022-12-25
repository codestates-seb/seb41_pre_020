package com.y2k.stackoverflow.member.service;

import com.y2k.stackoverflow.auth.utils.CustomAuthorityUtils;
import com.y2k.stackoverflow.exception.BusinessLogicException;
import com.y2k.stackoverflow.exception.ExceptionCode;
import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final ApplicationEventPublisher publisher;

    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public Member join(Member member) {
        verifyExistsEmail(member.getEmail());

        // password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        // Role 설정
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        Member savedMember = (Member) memberRepository.save(member);

        return savedMember;
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());
        Optional.ofNullable(member.getDisplayName())
                .ifPresent(name -> findMember.setDisplayName(member.getDisplayName()));
        Optional.ofNullable(member.getUserProfile())
                .ifPresent(findMember::setUserProfile);

        return (Member) memberRepository.save(findMember);
    }

    @Transactional(readOnly = true)
    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    //permitAll -> MemberStatus == ACTIVE 인 회원만 조회
    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAllByMemberStatus(Member.MemberStatus.MEMBER_ACTIVE,
                PageRequest.of(page, size, Sort.by("memberId").descending()));
    }

    //관리자용 (탈퇴/휴면 회원 포함)
    public Page<Member> findAllMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size, Sort.by("memberId").descending()));
    }

    public void deleteMember(long memberId) {
        Member member = findVerifiedMember(memberId);
        member.setMemberStatus(Member.MemberStatus.MEMBER_QUIT);
        memberRepository.save(member);
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        if (optionalMember.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    private Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        //회원 상태가 정지(탈퇴) or 휴면 상태면 INVALID_MEMBER_STATUS Exception 을 던진다.
        if(member.getMemberStatus() == Member.MemberStatus.MEMBER_QUIT
                || member.getMemberStatus() == Member.MemberStatus.MEMBER_SLEEP) {
            throw new BusinessLogicException(ExceptionCode.INVALID_MEMBER_STATUS);
        }
        return member;
    }
}
