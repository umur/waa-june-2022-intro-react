package com.miu.project6.exceptionHandler.exceptions;

public class OffensiveWordException extends RuntimeException {
    public  OffensiveWordException(String message) {
        super(message);
    }
}