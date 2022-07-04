package com.example.lab6.exception;

public class OffensiveWordException extends RuntimeException {
    public  OffensiveWordException(String message) {
        super(message);
    }
}
