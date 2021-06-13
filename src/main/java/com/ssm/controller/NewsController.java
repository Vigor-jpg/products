package com.ssm.controller;

import com.alibaba.fastjson.JSONObject;
import com.ssm.domain.News;
import com.ssm.service.NewsService;
import com.ssm.utils.FreeMarkerUtils;
import com.ssm.utils.UploadUtils;
import freemarker.template.TemplateException;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

@Controller
@RequestMapping("/news")
public class NewsController {
    @Autowired
    NewsService newsService;
    @ResponseBody
    @RequestMapping("/getTabNews")
    public String getTabNews(@Param("page")int page,
                             @Param("target")String target){
        return newsService.getTabNews(page,target);
    }
    @ResponseBody
    @RequestMapping("/getHotNews")
    public String getHotNews(){
        return newsService.getTopNews(5);
    }
    @ResponseBody
    @RequestMapping("/newsManager")
    public String newsManager(){
        return newsService.getTopNews(20);
    }
    @ResponseBody
    @RequestMapping("/getHomeNews")
    public String getHomeNews(){
        return newsService.getTopNews(2);
    }
    @ResponseBody
    @RequestMapping("/saveNews")
    public String saveNews(News news,MultipartFile file,HttpServletRequest request) throws IOException, TemplateException {
        //System.out.println(news.getNews_txt());
        String file_path=request.getSession().getServletContext().getRealPath("/upload");
        news.setNews_img_path(UploadUtils.UploadImg(file,file_path));
        String templet_path=request.getSession().getServletContext().getRealPath("/WEB-INF/ftl");
        file_path=request.getSession().getServletContext().getRealPath("/news");
        Date date=new Date();
        DateFormat dateFormat=new SimpleDateFormat("YYYY-MM-dd");
        news.setNews_time(dateFormat.format(date));
        HashMap<String,Object> map=new HashMap<String, Object>();
        map.put("title",news.getNews_title());
        map.put("time",news.getNews_time());
        map.put("target",news.getNews_target());
        map.put("content",news.getNews_txt());
        news.setNews_url(FreeMarkerUtils.generateHtml(templet_path,"news.ftl",file_path,map));
        newsService.saveNews(news);
        return "true";
    }
    @ResponseBody
    @RequestMapping("/uploadImg")
    public JSONObject uploadImg(@RequestParam("upload") MultipartFile img, HttpServletRequest request){
        String img_path=request.getSession().getServletContext().getRealPath("/upload");
        img_path="http://www.neem8.com/"+UploadUtils.UploadImg(img,img_path);
        HashMap<String,Object> map=new HashMap<String, Object>();
        map.put("uploaded",true);
        map.put("url",img_path);
        return new JSONObject(map);
    }
    @ResponseBody
    @RequestMapping("/deleteNews")
    public String deleteNews(String news_id,HttpServletRequest request){
        News news=newsService.getNews(Integer.parseInt(news_id));
        String img_path=request.getSession().getServletContext().getRealPath("")+news.getNews_img_path().replace("/","\\");
        String html_path=request.getSession().getServletContext().getRealPath("")+news.getNews_url().replace("/","\\").substring(1);
        File img_file=new File(img_path);
        File html_file=new File(html_path);
        if(img_file.exists()){
            img_file.delete();
        }
        if(html_file.exists()){
            html_file.delete();
        }
        newsService.deleteNews(Integer.parseInt(news_id));
        return "true";
    }
    @ResponseBody
    @RequestMapping("/editNews")
    public String editNews(String news_id){
        //System.out.println(newsService.getNewsDetail(Integer.parseInt(news_id)));
        return newsService.getNewsDetail(Integer.parseInt(news_id));
    }
    @ResponseBody
    @RequestMapping("/updateNews")
    public String updateNews(News news,MultipartFile file,HttpServletRequest request,String id) throws TemplateException,IOException{
        news.setNews_id(Integer.parseInt(id));
        if(!file.isEmpty()){
            String news_img_path=request.getSession().getServletContext().getRealPath("")+news.getNews_img_path().replace("/","\\");
            File img_file=new File(news_img_path);
            if(img_file.exists()){
                img_file.delete();
            }
            news_img_path=request.getSession().getServletContext().getRealPath("/upload");
            news.setNews_img_path(UploadUtils.UploadImg(file,news_img_path));
        }
        String file_name=request.getSession().getServletContext().getRealPath("/")+news.getNews_url().replace("/","\\").substring(1);
        //System.out.println(file_name);
        String template_path=request.getSession().getServletContext().getRealPath("/WEB-INF/ftl");
        HashMap<String,Object> map=new HashMap<String, Object>();
        map.put("title",news.getNews_title());
        map.put("content",news.getNews_txt());
        map.put("target",news.getNews_target());
        map.put("time",news.getNews_time());
        FreeMarkerUtils.updateHtml(template_path,"news.ftl",file_name,map);
        newsService.updateNews(news);
        return "true";
    }
}
