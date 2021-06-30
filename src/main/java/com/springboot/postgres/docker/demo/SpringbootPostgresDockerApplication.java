package com.springboot.postgres.docker.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class SpringbootPostgresDockerApplication {

    public static void main(String[] args) {

        SpringApplication.run(SpringbootPostgresDockerApplication.class, args);
    }

}
