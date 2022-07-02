package com.example.lab6.repo;

import com.example.lab6.entity.User;
import org.springframework.data.repository.CrudRepository;


public interface UserRepo extends CrudRepository<User, Integer> {
    User findByUserName(String userName);
}
