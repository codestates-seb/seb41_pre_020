package com.y2k.stackoverflow.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*", "https://8f8e-211-243-16-192.jp.ngrok.io", "http://localhost:8080", "http://localhost:8081", "http://localhost:3000")
                .allowedMethods("*")
                .allowedHeaders("*")
                .maxAge(3000);
    }
}
