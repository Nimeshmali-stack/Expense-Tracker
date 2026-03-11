package com.nimesh.fullstack.model;

import jakarta.persistence.*;

@Entity
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String expenseName;
    private double amount;
    private String date;
    private String description;

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getExpenseName() { return expenseName; }

    public void setExpenseName(String expenseName) { this.expenseName = expenseName; }

    public double getAmount() { return amount; }

    public void setAmount(double amount) { this.amount = amount; }

    public String getDate() { return date; }

    public void setDate(String date) { this.date = date; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }
}