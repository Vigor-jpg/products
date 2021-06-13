import com.ssm.dao.JobMapper;
import com.ssm.dao.NewsMapper;
import com.ssm.dao.ProductMapper;
import com.ssm.dao.UserMapper;
import com.ssm.domain.Job;
import com.ssm.domain.News;
import com.ssm.domain.Product;
import com.ssm.domain.User;
import com.ssm.service.*;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class mybatis {
    @Test
    public void test() {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("config/applicationContext.xml");
        ProductService jobService = (ProductService) applicationContext.getBean("ProductService");
        System.out.println(jobService.getTabProduct(1, "有机农药"));
    }

    @Test
    public void sendEmail() {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("config/applicationContext.xml");
        EmailService emailService = (EmailService) applicationContext.getBean("EmailService");
        emailService.sendMail("1424214557@qq.com", "你的验证码为838294");
    }

    @Test
    public void mybatis() throws IOException {
        InputStream inputStream = Resources.getResourceAsStream("config/sqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        SqlSession sqlSession = sqlSessionFactory.openSession();
        ProductMapper jobMapper = sqlSession.getMapper(ProductMapper.class);
    }

    @Test
    public void time() {
        Calendar calendar = Calendar.getInstance();
        System.out.println(calendar.get(Calendar.YEAR));
    }
}
