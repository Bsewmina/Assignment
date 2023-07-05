package com.example.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.assignment.model.Customer;


public interface CustomerRepository extends JpaRepository<Customer, Long>{

}