package com.y2k.stackoverflow.member.repository;

import com.y2k.stackoverflow.member.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository<T> extends JpaRepository<Member, Long> {

    Optional<Member> findByEmail(String email);
    Page<T> findAllByMemberStatus(Member.MemberStatus status, Pageable pageable);

}
