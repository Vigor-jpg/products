package com.ssm.intercepter;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UserIntercepter implements HandlerInterceptor {
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Boolean isLogin=(Boolean) request.getSession().getAttribute("isLogin");
        if(isLogin==null){
            response.sendRedirect("/user/login");
            return false;
        }
        return true;
    }
}
