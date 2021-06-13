package com.ssm.dao;

import com.ssm.domain.Job;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface JobMapper {
    public List<Job> getJobDetails(@Param("job_place") String job_place,
                                   @Param("job_kind") String job_kind,
                                   @Param("job_time") String job_time);

    public void saveJob(Job job);

    public List<Job> getLimitJob(int num);

    public void deleteJob(int job_id);

    public void updateJob(Job job);

    public Job getJob(int job_id);

    public List<String> getJobPlace();
}
