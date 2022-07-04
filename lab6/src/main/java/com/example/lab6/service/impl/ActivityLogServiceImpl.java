package com.example.lab6.service.impl;

import com.example.lab6.entity.ActivityLog;
import com.example.lab6.repo.ActivityLogRepo;
import com.example.lab6.service.ActivityLogService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ActivityLogServiceImpl implements ActivityLogService {
    private final ActivityLogRepo activityLogRepo;

    @Override
    public void save(ActivityLog a) {
        activityLogRepo.save(a);
    }
}
