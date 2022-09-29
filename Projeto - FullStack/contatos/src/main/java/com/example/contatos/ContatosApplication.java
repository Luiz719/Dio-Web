package com.example.contatos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
@ComponentScan({"come.example.contatos"})
public class ContatosApplication {
	public static void main(String[] args) {
		SpringApplication.run(ContatosApplication.class, args);
	}
}
