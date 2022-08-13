package com.example.persistence;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PersistenceApplication implements CommandLineRunner{
	@Autowired
	StudentRepository repo;
	public static void main(String[] args) {
		SpringApplication.run(PersistenceApplication.class, args);
	}
	@Override
	public void run(String... args){
		repo.save(new Student("James", 17));
		repo.save(new Student("John", 16));
		repo.save(new Student("Mark", 15));
		repo.save(new Student("Carl", 18));
		repo.save(new Student("Paul", 14));
		System.out.println("\n-->Lista de alunos:\n");
		for (Student student : repo.findAll()) {
			System.out.println("\n-->Dados do aluno:\n");
			System.out.println(student.toString());
		}
		Student student = repo.findByName("Mark");
		System.out.println("\n-->Procurando Mark:\n");
		System.out.println(student.toString());
		System.out.println("\n-->Procurando id 4:\n");
		Student who = repo.findById(4);
		System.out.println(who.toString());
	}
}
