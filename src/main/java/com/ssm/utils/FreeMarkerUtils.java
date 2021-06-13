package com.ssm.utils;

import com.ssm.domain.Product;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.apache.commons.io.output.FileWriterWithEncoding;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class FreeMarkerUtils {
    public static String generateHtml(String templet_path,String templet_name, String file_path, Map map) throws IOException,TemplateException{
        Template template=getTemplate(templet_path,templet_name);
        String file_name=new Date().getTime()+".html";
        File h5_file=new File(file_path,file_name);
        h5_file.createNewFile();
        FileWriterWithEncoding out = new FileWriterWithEncoding(h5_file,"UTF-8");
        template.process(map, out);
        out.close();
        System.out.println(file_path);
        return "/"+file_path.split("ROOT\\\\")[1]+"/"+file_name;
    }
    public static void updateHtml(String template_path,String template_name,String file_name,Map map) throws IOException,TemplateException{
        Template template=getTemplate(template_path,template_name);
        FileWriterWithEncoding out = new FileWriterWithEncoding(file_name,"UTF-8");
        template.process(map, out);
        out.close();
    }
    public static Template getTemplate(String template_path,String template_name) throws IOException{
        Configuration configuration = new Configuration(Configuration.VERSION_2_3_28);
        configuration.setDirectoryForTemplateLoading(new File(template_path));
        configuration.setDefaultEncoding("UTF-8");
        return configuration.getTemplate(template_name);
    }
}
