package com.example.lab6.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JoinColumn(name = "username")
    private String userName;

    @JsonIgnore
    private String password;

    @Column(name = "firstname")
    private String firstName;
    @Column(name = "lastname")
    private String lastName;

    @JoinTable
    @ManyToMany(fetch = FetchType.EAGER)
    private List<Role> role;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
//  @JsonManagedReference
    private List<Product> products;
}
