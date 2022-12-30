package com.y2k.stackoverflow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
@PropertySource("classpath:/environ/env.properties")
public class StackoverflowApplication {

	public static void main(String[] args) {
		SpringApplication.run(StackoverflowApplication.class, args);
	}

}
