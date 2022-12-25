package com.y2k.stackoverflow.auth.handler;

import com.y2k.stackoverflow.auth.jwt.JwtTokenizer;
import com.y2k.stackoverflow.auth.utils.CustomAuthorityUtils;
import com.y2k.stackoverflow.member.entity.Member;
import com.y2k.stackoverflow.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RequiredArgsConstructor
@Slf4j
public class OAuth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberRepository memberRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        //구글의 email, name, profileImage 를 가져옴
        var oAuth2User = (OAuth2User) authentication.getPrincipal();
        String email = oAuth2User.getAttributes().get("email").toString();
        Map<String, Object> attributes = oAuth2User.getAttributes();
        String name = oAuth2User.getAttributes().get("name").toString();
        String picture = oAuth2User.getAttributes().get("picture").toString();

        List<String> roles = authorityUtils.createRoles(email);
        saveMember(email, name, picture);
        redirect(request, response, email, roles);

    }

    private void saveMember(String email, String name, String picture) {
        Member member = new Member();
        member.setEmail(email);
        member.setDisplayName(name);
        member.setProfileImage(picture);
        memberRepository.save(member);
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, String username, List<String> authorities) throws IOException {
        String accessToken = delegateAccessToken(username, authorities);
        String refreshToken = delegateRefreshToken(username);

        String uri = createURI(accessToken, refreshToken).toString();
        getRedirectStrategy().sendRedirect(request, response, uri);

    }

    private URI createURI(String accessToken, String refreshToken) {
        MultiValueMap<String, String> queryParam = new LinkedMultiValueMap<>();
        queryParam.add("access_token", "Bearer " + accessToken);
        queryParam.add("refresh_token", refreshToken);

        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("localhost") // TODO: 제거예
                .port(80)
                .path("/receive-token") // TODO: 수정예
                .queryParams(queryParam)
                .build()
                .toUri();
    }

    private String delegateAccessToken(String username, List<String> authorities) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("roles", authorities);

        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
        String encodeBase64SecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        return jwtTokenizer.generateAccessToken(claims, subject, expiration, encodeBase64SecretKey);
    }

    private String delegateRefreshToken(String username) {
        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String encodeBase64SecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        return jwtTokenizer.generateRefreshToken(subject, expiration, encodeBase64SecretKey);
    }
}
