package com.miu.project6.service.impl;

import com.miu.project6.entity.ActivityLog;
import com.miu.project6.repo.ActivityLogRepo;
import com.miu.project6.service.ActivityLogService;
import org.springframework.stereotype.Service;

@Service
public class ActivityLogServiceImpl implements ActivityLogService {
    private final ActivityLogRepo activityLogRepo;

    public ActivityLogServiceImpl(ActivityLogRepo activityLogRepo) {
        this.activityLogRepo = activityLogRepo;
    }

    @Override
    public void save(ActivityLog a) {
        activityLogRepo.save(a);
    }
}
