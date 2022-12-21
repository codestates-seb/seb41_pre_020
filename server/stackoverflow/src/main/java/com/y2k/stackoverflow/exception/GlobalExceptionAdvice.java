package com.y2k.stackoverflow.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionAdvice {

    @ExceptionHandler
    public ResponseEntity handleBusinessLogicException(BusinessLogicException e) {
        ErrorResponse response = ErrorResponse.of(e.getExceptionCode());
        return new ResponseEntity(response, HttpStatus.valueOf(e.getExceptionCode().getStatus()));
    }
}