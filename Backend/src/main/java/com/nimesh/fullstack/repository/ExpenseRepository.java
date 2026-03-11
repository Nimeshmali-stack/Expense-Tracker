package com.nimesh.fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nimesh.fullstack.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}