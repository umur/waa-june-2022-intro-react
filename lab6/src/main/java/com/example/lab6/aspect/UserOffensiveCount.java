package com.example.lab6.aspect;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.Duration;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class UserOffensiveCount {
    private final int count;

    private final LocalDateTime lastRequest;

    private int timeout = 15 * 60;

    public UserOffensiveCount(int count, LocalDateTime lastRequest) {
        this.count = count;
        this.lastRequest = lastRequest;
    }

    public long timeOut() {
        Duration diff = Duration.between(lastRequest, LocalDateTime.now());

        if (diff.toSeconds() < timeout) {
            return timeout - diff.toSeconds();
        }

        return 0;
    }
}
