package com.miu.project6.annotation.aspect;

import com.miu.project6.entity.Product;
import com.miu.project6.exception.OffensiveWordException;
import lombok.AllArgsConstructor;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Aspect
@Component
@AllArgsConstructor
public class OffensiveWordValidationAspect {
    private final HttpServletRequest httpServletRequest;
    public static Map<String, UserOffensiveCount> offensiveWordCount = new HashMap<>();

    private final List<String> offensiveWords = List.of("test", "testdata");

    @Pointcut(value = "execution(* com.miu.project6.controller..*(..))")
    public void controller() {
    }

    @Around("controller()")
    public Object logging(ProceedingJoinPoint jp) throws Throwable {
        if (httpServletRequest.getRequestURI().indexOf("/api/v1/uaa") == -1 && httpServletRequest.getMethod().equals("POST") || httpServletRequest.getMethod().equals("PUT")) {
            var user = httpServletRequest.getUserPrincipal().getName();

            var args = jp.getArgs();
            int index = 0;
            for (Object obj : args) {

                for (String offenseWord : offensiveWords) {
                    if (obj.toString().contains(offenseWord)) {
                        Product p =((Product) obj);

                        p.setProductName(p.getProductName().replace(offenseWord,"****"));

                        if(offensiveWordCount.containsKey(user)){
                            var userRequestCount = offensiveWordCount.get(user);
                            var totalCount = userRequestCount.getCount();
                            offensiveWordCount.put(user, new UserOffensiveCount(++totalCount, LocalDateTime.now()));
                            if (offensiveWordCount.get(user).getCount() >= 5) {
                                long timeOut = offensiveWordCount.get(user).timeOut();
                                if (timeOut > 0) {
                                    throw new OffensiveWordException("User has been banned");
                                }
                            }
                        }else {
                            offensiveWordCount.put(user, new UserOffensiveCount(1, LocalDateTime.now()));
                        }

                        args[index] = p;
                        jp.proceed(args);
                    }

                }
                index++;
            }

        }
        return jp.proceed();
    }
}