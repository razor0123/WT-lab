package com.example.bill.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class billentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    public billentity() {

    }
    private int id;
    private String consumerName;
    private double unitsConsumed;
    // other fields, getters, and setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getConsumerName() {
        return consumerName;
    }
    public void setConsumerName(String consumerName) {
        this.consumerName = consumerName;
    }
    public double getUnitsConsumed() {
        return unitsConsumed;
    }
    public void setUnitsConsumed(double unitsConsumed) {
        this.unitsConsumed = unitsConsumed;
    }

    @Override
    public String toString() {
        return "billentity [id=" + id + ", consumerName=" + consumerName + ", unitsConsumed=" + unitsConsumed + "]";
    }
    
    
}
