package com.example.bill.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface billrepo extends JpaRepository<billentity, Integer> {
    // repository methods...
}
