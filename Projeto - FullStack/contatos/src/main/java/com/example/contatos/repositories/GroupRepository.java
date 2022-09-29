package com.example.contatos.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.contatos.models.Group;


public interface GroupRepository extends JpaRepository<Group, Long>{

    List<Group> findByName(String name);

    Group getById(long id);
}