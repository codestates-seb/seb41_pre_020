package com.y2k.stackoverflow.exception;

import lombok.Getter;

public enum ExceptionCode {
    COMMENT_NOT_FOUND(404, "Comment Not Found"),
    METHOD_NOT_ALLOWED(405, "Method Not Allowed"),
    INTERNAL_SERVER_ERROR(500, "Internal Server Error");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}