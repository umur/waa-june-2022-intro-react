package com.example.lab6.service;

import com.example.lab6.dto.ProductDtoResponse;
import com.example.lab6.entity.Product;


import java.util.List;

public interface ProductService {
    void save(Product p);

    void delete(int id);

    Product getById(int id);

    List<ProductDtoResponse> getAll();
}