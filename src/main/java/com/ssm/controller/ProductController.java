package com.ssm.controller;

import com.alibaba.fastjson.JSONArray;
import com.ssm.domain.SampleProduct;
import com.ssm.utils.FreeMarkerUtils;
import com.ssm.utils.UploadUtils;
import com.ssm.domain.Product;
import com.ssm.service.ProductService;
import freemarker.template.TemplateException;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

import java.io.File;

import java.io.IOException;

import java.util.HashMap;

@Controller
@RequestMapping("/product")
public class ProductController {
    @Autowired
    ProductService productService;

    @ResponseBody
    @RequestMapping("/getTabProduct")
    public String getTabProduct(@Param("page") int page,
                                @Param("target") String target) {
        System.out.println(productService.getTabProduct(page, target));
        return productService.getTabProduct(page, target);
    }

    @ResponseBody
    @RequestMapping("/getHomeProduct")
    public String getHomeProduct() {
        return productService.getHomeProduct(4);
    }

    @ResponseBody
    @RequestMapping("/getProductType")
    public String getProductType() {
        return productService.getProductType();
    }

    @ResponseBody
    @RequestMapping("/saveProduct")
    public String saveProduct(Product product, MultipartFile file, HttpServletRequest req) throws IOException, TemplateException {
        System.out.println("1111");
        String file_path = req.getSession().getServletContext().getRealPath("/upload");
        product.setProduct_img_path(UploadUtils.UploadImg(file, file_path));
        String templet_path = req.getSession().getServletContext().getRealPath("/WEB-INF/ftl");
        file_path = req.getSession().getServletContext().getRealPath("/products");
        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("product_size", product.getProduct_size());
        map.put("product_target", product.getProduct_target());
        map.put("product_descrip", product.getProduct_descrip());
        map.put("product_name", product.getProduct_name());
        map.put("product_detail", product.getProduct_detail());
        map.put("product_other", product.getProduct_other());
        product.setProduct_url(FreeMarkerUtils.generateHtml(templet_path, "product.ftl", file_path, map));
        return productService.saveProduct(product);
    }

    @ResponseBody
    @RequestMapping("/productManager")
    public String productManager() {
        return productService.getTopProduct(20);
    }

    @ResponseBody
    @RequestMapping("/deleteProduct")
    public String deleteProduct(String product_id, HttpServletRequest request) {
        Product sampleProduct = productService.getProduct(Integer.parseInt(product_id));
        String sample_img_path = productService.getSampleImgPath(Integer.parseInt(product_id));
        String img_path = request.getSession().getServletContext().getRealPath("/") + sampleProduct.getProduct_img_path().replace("/", "\\");
        String h5_path = request.getSession().getServletContext().getRealPath("/") + sampleProduct.getProduct_url().replace("/", "\\").substring(1);
        if (sample_img_path != null) {
            sample_img_path = request.getSession().getServletContext().getRealPath("/") + sample_img_path.replace("/", "\\");
            File sample_img_file = new File(sample_img_path);
            if (sample_img_file.exists()) {
                sample_img_file.delete();
            }
        }
        File img_file = new File(img_path);
        if (img_file.exists()) {
            img_file.delete();
        }
        File h5_file = new File(h5_path);
        if (h5_file.exists()) {
            h5_file.delete();
        }
        productService.deleteProduct(Integer.parseInt(product_id));
        productService.deleteSampleProduct(Integer.parseInt(product_id));
        return "true";
    }

    @ResponseBody
    @RequestMapping("/editProduct")
    public String editProduct(String product_id, HttpServletRequest request) {
        return JSONArray.toJSONString(productService.getProduct(Integer.parseInt(product_id)));
    }

    @ResponseBody
    @RequestMapping("/updateProduct")
    public String updateProduct(Product product, HttpServletRequest request, MultipartFile file, String id) throws IOException, TemplateException {
        System.out.println(id);
        product.setProduct_id(Integer.parseInt(id));
        if (!file.isEmpty()) {
            String product_img_path = request.getSession().getServletContext().getRealPath("") + product.getProduct_img_path().replace("/", "\\");
            File img_file = new File(product_img_path);
            if (img_file.exists()) {
                img_file.delete();
            }
            product_img_path = request.getSession().getServletContext().getRealPath("/upload");
            product.setProduct_img_path(UploadUtils.UploadImg(file, product_img_path));
        }
        String file_name = request.getSession().getServletContext().getRealPath("/") + product.getProduct_url().replace("/", "\\").substring(1);
        String template_path = request.getSession().getServletContext().getRealPath("/WEB-INF/ftl");
        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("product_name", product.getProduct_name());
        map.put("product_target", product.getProduct_target());
        map.put("product_detail", product.getProduct_size());
        map.put("product_size", product.getProduct_size());
        map.put("product_descrip", product.getProduct_descrip());
        map.put("product_other", product.getProduct_other());
        FreeMarkerUtils.updateHtml(template_path, "product.ftl", file_name, map);
        productService.updateProduct(product);
        return "true";
    }

    @ResponseBody
    @RequestMapping("/addHomeProduct")
    public String addHomeProduct(SampleProduct sampleProduct, String id, MultipartFile file, HttpServletRequest request) {
        String file_path = request.getSession().getServletContext().getRealPath("/upload");
        sampleProduct.setProduct_img_path(UploadUtils.UploadImg(file, file_path));
        Product product = productService.getProduct(Integer.parseInt(id));
        sampleProduct.setProduct_url(product.getProduct_url());
        sampleProduct.setProduct_id(Integer.parseInt(id));
        productService.addHomeProduct(sampleProduct);
        return "true";
    }

    @ResponseBody
    @RequestMapping("/sampleProductManager")
    public String sampleProductManager() {
        return productService.getHomeProduct(20);
    }

    @ResponseBody
    @RequestMapping("/deleteSampleProduct")
    public String deleteSampleProduct(String id, HttpServletRequest request) {
        String img_path = productService.getSampleImgPath(Integer.parseInt(id));
        if (img_path != null) {
            img_path = request.getSession().getServletContext().getRealPath("/") + img_path.replace("/", "\\");
            System.out.println("img_path");
            File sample_img_file = new File(img_path);
            if (sample_img_file.exists()) {
                sample_img_file.delete();
            }
        }
        productService.deleteSampleProduct(Integer.parseInt(id));
        return "true";
    }

    @ResponseBody
    @RequestMapping("/updateHomeProduct")
    public String updateSampleProduct(String id, SampleProduct sampleProduct, MultipartFile file, HttpServletRequest request) {
        String img_path = productService.getSampleImgPath(Integer.parseInt(id));
        sampleProduct.setProduct_id(Integer.parseInt(id));
        if (!file.isEmpty()) {
            if (img_path != null) {
                img_path = request.getSession().getServletContext().getRealPath("/") + img_path.replace("/", "\\");
                File sample_img_file = new File(img_path);
                if (sample_img_file.exists()) {
                    sample_img_file.delete();
                }
            }
            img_path = UploadUtils.UploadImg(file, request.getSession().getServletContext().getRealPath("/upload"));
        }
        sampleProduct.setProduct_img_path(img_path);
        productService.updateHomeProduct(sampleProduct);
        return "true";
    }
}
