package com.exemplo.Exemplo;

import org.springframework.stereotype.Service;

@Service
public class SuspenseWriter implements IWriter{
    @Override
    public void write(String s) {     
        System.out.println("História de suspense: " + s);       
    }   
}