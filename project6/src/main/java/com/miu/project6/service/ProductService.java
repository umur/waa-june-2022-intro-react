package com.miu.project6.service;

import com.miu.project6.dto.ProductDtoResponse;
import com.miu.project6.entity.Product;

import java.util.List;

public interface ProductService {
    void save(Product p);
    void delete(int id);
    Product getById(int id);
    List<ProductDtoResponse> getAll();
}
