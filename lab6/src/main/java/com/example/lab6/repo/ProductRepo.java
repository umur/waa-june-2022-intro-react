package com.example.lab6.repo;

import com.example.lab6.entity.Product;
import org.springframework.data.repository.CrudRepository;


public interface ProductRepo extends CrudRepository<Product,Integer> {
}
