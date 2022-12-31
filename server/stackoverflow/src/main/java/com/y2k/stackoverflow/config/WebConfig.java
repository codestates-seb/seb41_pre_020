package com.y2k.stackoverflow.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*", "http://ec2-43-201-60-216.ap-northeast-2.compute.amazonaws.com:8080", "http://localhost:8080", "http://localhost:8081", "http://localhost:3000")
                .allowedMethods("GET", "POST", "PATCH", "DELETE", "OPTIONS")
                .allowCredentials(false)
                .allowedHeaders("*")
                .maxAge(3000);
    }
}