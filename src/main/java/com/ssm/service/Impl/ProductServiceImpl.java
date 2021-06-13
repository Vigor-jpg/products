package com.ssm.service.Impl;

import com.alibaba.fastjson.JSONArray;
import com.ssm.dao.ProductMapper;
import com.ssm.domain.Product;
import com.ssm.domain.SampleProduct;
import com.ssm.service.ProductService;
import org.apache.ibatis.javassist.tools.rmi.Sample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
@Service("ProductService")
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductMapper productMapper;
    public String getTabProduct(int page, String target) {
        int maxPage=productMapper.getMaxSize(target);
        List<SampleProduct> list=productMapper.getTabProduct((page-1)*9,target);
        String result="{\"TabProduct\":"+ JSONArray.toJSONString(list)+",\"maxPage\":"+maxPage+"}";
        return result;
    }
    public String getTopProduct(int num) {
        return JSONArray.toJSONString(productMapper.getTopProduct(num));
    }
    public String getHomeProduct(int num) {
        return JSONArray.toJSONString(productMapper.getHomeProduct(num));
    }
    public String getProductType(){
        return JSONArray.toJSONString(productMapper.getProductType());
    }
    public String saveProduct(Product product) {
        productMapper.saveProduct(product);
        return "true";
    }

    public String getSampleImgPath(int product_id) {
        return productMapper.getSampleImgPath(product_id);
    }

    public Product getProduct(int product_id) {
        return productMapper.getProduct(product_id);
    }

    public void deleteProduct(int product_id) {

        productMapper.deleteProduct(product_id);
    }

    public void deleteSampleProduct(int product_id) {
        productMapper.deleteSampleProduct(product_id);
    }

    public void updateProduct(Product product) {
        productMapper.updateProduct(product);
    }

    public void addHomeProduct(SampleProduct sampleProduct) {
        productMapper.addHomeProduct(sampleProduct);
    }

    public void updateHomeProduct(SampleProduct sampleProduct) {
        productMapper.updateHomeProduct(sampleProduct);
    }
}
