package com.example.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.model.Tutorial;

public interface TutorialRepository extends JpaRepository<Tutorial, Long>{
    List<Tutorial> findByPublished(Boolean published);
    List<Tutorial> findByTitleContaining(String title);
    Tutorial findById(long id);
}