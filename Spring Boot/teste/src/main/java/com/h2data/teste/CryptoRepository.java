package com.h2data.teste;

import org.springframework.data.repository.CrudRepository;

public interface CryptoRepository extends CrudRepository<Crypto, Integer>{
    Crypto findByName(String name);
    Crypto findBySymbol(String symbol);
    Crypto findById(int id);
}