package com.y2k.stackoverflow.exception;

import lombok.Getter;

public enum ExceptionCode {


    INVALID_MEMBER_STATUS(400, "Invalid member status"),
    ACCESS_FORBIDDEN(403, "Access forbidden"),
    QUESTION_NOT_PATCHED(403, "Question not patched"),
    ANSWER_NOT_PATCHED(403, "Answer not patched"),
    COMMENT_NOT_FOUND(404, "Comment Not Found"),
    ANSWER_NOT_FOUND(404, "Answer Not Found"),
    QUESTION_NOT_FOUND(404, "Question Not Found"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    METHOD_NOT_ALLOWED(405, "Method Not Allowed"),
    MEMBER_EXISTS(409, "Member exists"),
    INTERNAL_SERVER_ERROR(500, "Internal Server Error"),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    INVALID_PASSWORD (400, "Invalid Password");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
