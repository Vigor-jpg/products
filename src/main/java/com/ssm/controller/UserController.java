package com.ssm.controller;

import com.alibaba.fastjson.JSONArray;
import com.ssm.domain.User;
import com.ssm.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

@Controller
@RequestMapping("/user")
public class UserController {
    @Resource
    UserService userService;

    @RequestMapping("/login")
    public String login(User user, HttpServletRequest request) {
        System.out.println(user.getUser_name());
        System.out.println("!!!!!!");
        Boolean result = userService.loginUser(user);
        System.out.println(result);
        if (result) {
            request.getSession().setAttribute("isLogin", true);
            return "index.html";
        } else {
            return "login.html";
        }
    }

    @RequestMapping("/editJob")
    public String editJob(String job_id) {
        return "editJob.jsp?job_id=" + job_id;
    }

    @RequestMapping("/editNews")
    public String editNews(String news_id) {
        return "editJob.jsp?news_id=" + news_id;
    }

    @RequestMapping("/editProduct")
    public String editProduct(String product_id) {
        return "editProduct.jsp?product_id=" + product_id;
    }

    @RequestMapping("/addHomeProduct")
    public String addHomeProduct(String product_id) {
        return "addHomeProduct.jsp?product_id=" + product_id;
    }

    @RequestMapping("/{name}Manager")
    public String manager(HttpServletRequest request, @PathVariable String name) {
        return name + "Manager.html";
    }

    @RequestMapping("/upload{name}")
    public String upload(@PathVariable String name) {
        return "upload" + name + ".html";
    }

    @RequestMapping("/editMotoley")
    public String editMotoley() {
        return "editMotoley.html";
    }

    @RequestMapping("/updateHomeProduct")
    public String updateHomeProduct(String id, String product_name) {
        return "updateHomeProduct.jsp?id=" + id + "&product_name=" + product_name;
    }
}
