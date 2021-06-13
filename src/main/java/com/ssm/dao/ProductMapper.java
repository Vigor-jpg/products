package com.ssm.dao;

import com.ssm.domain.Product;
import com.ssm.domain.SampleProduct;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProductMapper {
    public List<SampleProduct> getTabProduct(@Param("minPage") int minPage,
                                                     @Param("target") String target);
    public List<SampleProduct> getTopProduct(int num);
    public List<SampleProduct> getHomeProduct(int num);
    public int getMaxSize(String target);
    public List<String> getProductType();
    public boolean saveProduct(Product product);
    public boolean saveSampleProduct(SampleProduct sampleProduct);
    public Product getProduct(int product_id);
    public String getSampleImgPath(int product_id);
    public void deleteProduct(int product_id);
    public void deleteSampleProduct(int product_id);
    public void updateProduct(Product product);
    public void addHomeProduct(SampleProduct sampleProduct);
    public void updateHomeProduct(SampleProduct sampleProduct);
}
