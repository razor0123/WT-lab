package com.example.bill.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bill.repository.billrepo;

@RestController
@RequestMapping("/bill")

public class billcontroller {
    private final billrepo billRepository;

    @Autowired
    public billcontroller(billrepo billRepository) {
        this.billRepository = billRepository;
    }

    @GetMapping("/")
    public String index(){
        return "Welcome to spring boot application";
    }
}
