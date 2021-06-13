package com.ssm.dao;

import com.ssm.domain.News;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface NewsMapper {
    public List<News> getTabNews(@Param("target") String target,
                                 @Param("minPage") int minPage);

    public List<News> getTopNews(int num);

    public int getNewsSize(String target);

    public void saveNews(News news);

    public void deleteNews(int news_id);

    public News getNews(int news_id);

    public News getNewsDetail(int news_id);

    public void updateNews(News news);
}
