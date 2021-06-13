package com.ssm.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;

public class UploadUtils {
    public static String UploadImg(MultipartFile file,String file_path){
        String file_name=file.getOriginalFilename();
        file_name=new Date().getTime()+file_name.substring(file_name.lastIndexOf("."));
        File file1=new File(file_path,file_name);
        try {
            file.transferTo(file1);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "upload/"+file_name;
    }
}
