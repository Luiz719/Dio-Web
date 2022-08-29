package com.example.loginauth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.loginauth.models.Address;

public interface AddressRepository extends JpaRepository<Address, Long>{
    
}