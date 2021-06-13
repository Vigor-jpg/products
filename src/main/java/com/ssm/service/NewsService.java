package com.ssm.service;

import com.ssm.domain.News;

public interface NewsService {
    public String getTabNews(int page,String target);
    public String getTopNews(int num);
    public void saveNews(News news);
    public void deleteNews(int news_id);
    public News getNews(int news_id);
    public String getNewsDetail(int news_id);
    public void updateNews(News news);
}
