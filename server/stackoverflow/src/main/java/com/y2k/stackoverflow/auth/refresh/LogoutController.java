package com.y2k.stackoverflow.auth.refresh;

import com.y2k.stackoverflow.auth.jwt.JwtTokenizer;
import com.y2k.stackoverflow.auth.utils.RedisUtil;
import com.y2k.stackoverflow.exception.BusinessLogicException;
import com.y2k.stackoverflow.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Slf4j
public class LogoutController {
    private final JwtTokenizer jwtTokenizer;
    private final RedisUtil redisUtil;
    private final TokenRepository tokenRepository;

    @PostMapping("/logout")
    public ResponseEntity logout(@RequestBody LogoutDto logoutDto) {

        String refreshToken = logoutDto.getRefreshToken();
        String accessToken = logoutDto.getAccessToken();
        String key = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        // Access Token 검증
        try {
            if (!jwtTokenizer.validateToken(accessToken, key)) {
                throw new BusinessLogicException(ExceptionCode.INVALID_TOKEN_STATUS);
            }
        } catch (NullPointerException ne) {
            log.info(ne.getMessage());
        }
        try {
            Token findRefreshToken = tokenRepository.findByRefreshToken(refreshToken);
            tokenRepository.delete(findRefreshToken);
        } catch (InvalidDataAccessApiUsageException ne) {
            log.info(ne.getMessage());
        }
//             DB에 저장된 Refresh Token 제거,
//             Access Token blacklist에 등록하여 만료시키기
            Long expiration = jwtTokenizer.getExpiration(accessToken, key);
            log.info("expiration : {}", expiration);
            redisUtil.setBlackList(accessToken, "access_token", expiration);

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
