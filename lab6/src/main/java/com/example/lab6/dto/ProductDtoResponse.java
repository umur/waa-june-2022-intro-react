package com.example.lab6.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ProductDtoResponse {
    private int id;
    private String name;
    private double price;
    private int numberOfStars;
    private CategoryDto category;
}
