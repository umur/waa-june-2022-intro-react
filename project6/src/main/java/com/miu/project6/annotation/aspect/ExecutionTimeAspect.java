package com.miu.project6.annotation.aspect;

import com.miu.project6.entity.ActivityLog;
import com.miu.project6.service.impl.ActivityLogServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@Aspect
@Slf4j
public class ExecutionTimeAspect {

    @Autowired
    private ActivityLogServiceImpl activityLogService;

    @Pointcut("@annotation(com.miu.project6.annotation.ExecutionTime)")
    public void executionTimeAnnotation() {
    }

    @Around("executionTimeAnnotation()")
    public Object calculateExecutionTime(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        //long start = System.nanoTime();
        long start = System.currentTimeMillis();
        var result = proceedingJoinPoint.proceed();
        long finish = System.currentTimeMillis() - start;//System.nanoTime();

        ActivityLog activityLog=new ActivityLog();
        activityLog.setDate(LocalDate.now());
        activityLog.setDuration(finish);
        activityLog.setOperation(proceedingJoinPoint.getSignature().getDeclaringTypeName()+" "+proceedingJoinPoint.getSignature().getName());
        activityLogService.save(activityLog);
        log.info("Aspect : Execution Time");
        log.info(proceedingJoinPoint.getSignature().getName() + " takes ns: " + finish);
//    log.info(proceedingJoinPoint.getSignature().getDeclaringTypeName()+ " takes ns: " + result);

        return result;
    }
}
