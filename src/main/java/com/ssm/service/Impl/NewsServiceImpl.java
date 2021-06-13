package com.ssm.service.Impl;

import com.mysql.cj.xdevapi.JsonArray;
import com.ssm.dao.NewsMapper;
import com.ssm.dao.UserMapper;
import com.ssm.domain.News;
import com.ssm.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.alibaba.fastjson.JSONArray;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("NewsService")
public class NewsServiceImpl implements NewsService {
    @Autowired
    NewsMapper newsMapper;

    public String getTabNews(int page, String target) {
        int maxPage = newsMapper.getNewsSize(target);
        List<News> list = newsMapper.getTabNews(target, (page - 1) * 6);
        String result = "{\"TabNews\":" + JSONArray.toJSONString(list) + ",\"maxPage\":" + maxPage + "}";
        return result;
    }

    public String getTopNews(int num) {
        List<News> list = newsMapper.getTopNews(num);
        String result = JSONArray.toJSONString(list);
        return result;
    }

    public void saveNews(News news) {
        newsMapper.saveNews(news);
    }

    public News getNews(int news_id) {
        return newsMapper.getNews(news_id);
    }

    public void deleteNews(int news_id) {
        newsMapper.deleteNews(news_id);
    }

    public String getNewsDetail(int news_id) {
        return JSONArray.toJSONString(newsMapper.getNewsDetail(news_id));
    }

    public void updateNews(News news) {
        newsMapper.updateNews(news);
    }
}
