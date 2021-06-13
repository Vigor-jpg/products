package com.ssm.service.Impl;

import com.ssm.dao.UserMapper;
import com.ssm.domain.User;
import com.ssm.service.UserService;
import org.springframework.context.annotation.ImportResource;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("UserService")
public class UserServiceImpl implements UserService {
    @Resource
    UserMapper userMapper;

    public boolean loginUser(User user) {
        return userMapper.loginUser(user);
    }
}
