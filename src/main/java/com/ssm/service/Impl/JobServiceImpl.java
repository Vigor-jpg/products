package com.ssm.service.Impl;

import com.alibaba.fastjson.JSONArray;
import com.ssm.dao.JobMapper;
import com.ssm.domain.Job;
import com.ssm.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("JobService")
public class JobServiceImpl implements JobService {
    @Autowired
    JobMapper jobMapper;

    public String getJobDetails(String job_place, String job_kind, String job_time) {
        return JSONArray.toJSONString(jobMapper.getJobDetails(job_place, job_kind, job_time));
    }

    public void saveJob(Job job) {
        jobMapper.saveJob(job);
    }

    public String getLimitJob(int num) {
        return JSONArray.toJSONString(jobMapper.getLimitJob(num));
    }

    public void deleteJob(int job_id) {
        jobMapper.deleteJob(job_id);
    }

    public void updateJob(Job job) {
        jobMapper.updateJob(job);
    }

    public String getJob(int job_id) {
        return JSONArray.toJSONString(jobMapper.getJob(job_id));
    }

    public String getJobPlace() {
        return JSONArray.toJSONString(jobMapper.getJobPlace());
    }
}
