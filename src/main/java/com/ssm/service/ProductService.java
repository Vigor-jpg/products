package com.ssm.service;

import com.ssm.domain.Product;
import com.ssm.domain.SampleProduct;
import org.springframework.web.multipart.MultipartFile;

public interface ProductService {
    public String getTabProduct(int page,String targt);
    public String getTopProduct(int num);
    public String getHomeProduct(int num);
    public String saveProduct(Product product);
    public String getProductType();
    public Product getProduct(int product_id);
    public void deleteProduct(int product_id);
    public void deleteSampleProduct(int product_id);
    public String getSampleImgPath(int product_id);
    public void updateProduct(Product product);
    public void addHomeProduct(SampleProduct sampleProduct);
    public void updateHomeProduct(SampleProduct sampleProduct);
}
