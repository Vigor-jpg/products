package com.ssm.domain;

import org.springframework.lang.Nullable;

import java.sql.Date;

public class News {

    private int news_id;

    private String news_title;

    private String news_detail;

    private String news_time;

    private String news_img_path;

    private String news_url;

    private String news_target;

    private String news_from;

    private String news_txt;

    public String getNews_txt() {
        return news_txt;
    }

    public void setNews_txt(String news_txt) {
        this.news_txt = news_txt;
    }

    public int getNews_id() {
        return news_id;
    }

    public void setNews_id(int news_id) {
        this.news_id = news_id;
    }

    public String getNews_title() {
        return news_title;
    }

    public void setNews_title(String news_title) {
        this.news_title = news_title;
    }

    public String getNews_detail() {
        return news_detail;
    }

    public void setNews_detail(String news_detail) {
        this.news_detail = news_detail;
    }

    public String getNews_time() {
        return news_time;
    }

    public void setNews_time(String news_time) {
        this.news_time = news_time;
    }

    public String getNews_img_path() {
        return news_img_path;
    }

    public void setNews_img_path(String news_img_path) {
        this.news_img_path = news_img_path;
    }

    public String getNews_url() {
        return news_url;
    }

    public void setNews_url(String news_url) {
        this.news_url = news_url;
    }

    public String getNews_target() {
        return news_target;
    }

    public void setNews_target(String news_target) {
        this.news_target = news_target;
    }

    public String getNews_from() {
        return news_from;
    }

    public void setNews_from(String news_from) {
        this.news_from = news_from;
    }


}
