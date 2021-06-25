package com.springboot.postgres.docker.demo.exceptions;

public class TestNotFoundException extends RuntimeException {
    public TestNotFoundException(String message) {
        super(message);
    }
}