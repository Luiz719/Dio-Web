package com.example.contatos.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.contatos.models.User;

public interface UserRepository extends JpaRepository<User, Long>{
    List<User> findByUsername(String username);

    User findById(long id);
}