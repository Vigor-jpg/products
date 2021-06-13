package com.ssm.service;

import com.ssm.domain.Job;

public interface JobService {
    public String getJobDetails(String job_place,String job_kind,String job_time);
    public void saveJob(Job job);
    public String getLimitJob(int num);
    public void deleteJob(int job_id);
    public void updateJob(Job job);
    public String getJob(int job_id);
    public String getJobPlace();
}
