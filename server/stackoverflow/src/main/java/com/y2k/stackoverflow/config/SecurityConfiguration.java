package com.y2k.stackoverflow.config;

import com.y2k.stackoverflow.auth.filter.JwtAuthenticationFilter;
import com.y2k.stackoverflow.auth.filter.JwtVerificationFilter;
import com.y2k.stackoverflow.auth.handler.*;
import com.y2k.stackoverflow.auth.jwt.JwtTokenizer;
import com.y2k.stackoverflow.auth.utils.CustomAuthorityUtils;
import com.y2k.stackoverflow.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class SecurityConfiguration {

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    //google oauth2
    private final MemberRepository memberRepository;

    @Value("${spring.security.oauth2.client.registration.google.clientId}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.google.clientSecret}")
    private String clientSecret;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()// TODO: 수정예 - H2 콘솔 사용을 위해 설정
                .and()
                .csrf().disable() // TODO: 제거예 - 로컬 환경에서 실행하기 위해 설정
                .cors(withDefaults()) // TODO: 제거예
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                //로그아웃시 홈으로 리다이렉트
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/")
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                // roles 별 권한 설정
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.GET, "/members/all").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/members/signup", "/members/login").permitAll() // 로그인/회원가입은 누구나 허용
                        .antMatchers(HttpMethod.GET, "/members/edit/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/members/**", "/question/**", "/comment/**").permitAll() // 조회는 누구나 허용
                        .antMatchers("/h2/**").permitAll() // h2 콘솔 사용을 위한 설정
//                        .antMatchers("/login/**").permitAll()
                        .anyRequest().authenticated()
                )
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, authorityUtils, memberRepository))); // oauth2 적용

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    // TODO: 제거예 - 프론트와 HTTP 통신을 위한 CORS 설정
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(Arrays.asList("*"));
        corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);
        return source;
    }


    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            //JwtAuthenticationFilter 등록
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer, memberRepository);
            jwtAuthenticationFilter.setFilterProcessesUrl("/members/login"); // 로그인 URL

            //로그인 인증 성공/실패시 수행할 것 추가
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            //JwtVerificationFilter 등록
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class)
                    .addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class); // jwtVeri 다음 oauth2
        }
    }

}
