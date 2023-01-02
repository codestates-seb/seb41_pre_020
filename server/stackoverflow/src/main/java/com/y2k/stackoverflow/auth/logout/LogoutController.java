package com.y2k.stackoverflow.auth.logout;

import com.y2k.stackoverflow.auth.jwt.JwtTokenizer;
import com.y2k.stackoverflow.auth.utils.RedisUtil;
import com.y2k.stackoverflow.exception.BusinessLogicException;
import com.y2k.stackoverflow.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Slf4j
public class LogoutController {
    private final JwtTokenizer jwtTokenizer;
    private final RedisUtil redisUtil;

    @PostMapping(path = "/logout", headers = "Authorization")
    public ResponseEntity logout(@RequestHeader String authorization) {

        String key = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        String accessToken = authorization.replace("Bearer ", "");
        // Access Token 검증
        try {
            if (!jwtTokenizer.validateToken(accessToken, key)) {
                throw new BusinessLogicException(ExceptionCode.INVALID_TOKEN_STATUS);
            }
        } catch (NullPointerException ne) {
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
