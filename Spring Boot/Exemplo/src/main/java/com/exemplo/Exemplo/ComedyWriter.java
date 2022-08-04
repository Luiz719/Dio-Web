package com.exemplo.Exemplo;

import org.springframework.stereotype.Service;

@Service
public class ComedyWriter implements IWriter{
    @Override
    public void write(String s) {
        System.out.println("História de comédia: " + s);     
    }   
}