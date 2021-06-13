package com.ssm.controller;

import com.ssm.domain.Job;
import com.ssm.service.JobService;
import com.ssm.utils.FreeMarkerUtils;
import freemarker.template.TemplateException;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

@Controller
@RequestMapping("/job")
public class JobController {
    @Autowired
    JobService jobService;
    @ResponseBody
    @RequestMapping("/getJobDetails")
    public String getJobDetails(@Param("job_palce") String job_place,
                                @Param("job_kind") String job_kind,
                                @Param("job_time")String job_time){
        return jobService.getJobDetails(job_place,job_kind,job_time);
    }
    @ResponseBody
    @RequestMapping("/saveJob")
    public String saveJob(Job job){
        Date time=new Date();
        DateFormat dateFormat=new SimpleDateFormat("YYYY-MM-DD");
        job.setJob_release_time(dateFormat.format(time));
        System.out.println(job.getJob_release_time());
        jobService.saveJob(job);
        return "true";
    }
    @ResponseBody
    @RequestMapping("/getLimitJob")
    public String getLimitJob(){
        return jobService.getLimitJob(20);
    }
    @ResponseBody
    @RequestMapping("/deleteJob")
    public String deleteJob(String job_id){
        jobService.deleteJob(Integer.parseInt(job_id));
        return "true";
    }
    @ResponseBody
    @RequestMapping("/updateJob")
    public String updateJob(Job job,String job_id){
        job.setJob_id(Integer.parseInt(job_id));
        jobService.updateJob(job);
        return "true";
    }
    @ResponseBody
    @RequestMapping("/getJob")
    public String getJob(String job_id){
        return jobService.getJob(Integer.parseInt(job_id));
    }
    @ResponseBody
    @RequestMapping("getJobPlace")
    public String getJobPlace(){
        return jobService.getJobPlace();
    }
    @ResponseBody
    @RequestMapping("/saveMOTOLEY")
    public String saveMOTOLEY(String MOTOLEY, HttpServletRequest request) throws IOException, TemplateException {
        String template_path=request.getSession().getServletContext().getRealPath("/WEB-INF/ftl");
        String file_name=request.getSession().getServletContext().getRealPath("/")+"zpzl.html";
        HashMap<String,Object> map=new HashMap<String, Object>();
        map.put("MOTOLEY",MOTOLEY);
        FreeMarkerUtils.updateHtml(template_path,"job.ftl",file_name,map);
        return "true";
    }
}
