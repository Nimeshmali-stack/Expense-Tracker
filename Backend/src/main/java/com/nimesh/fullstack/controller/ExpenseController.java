package com.nimesh.fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.nimesh.fullstack.model.Expense;
import com.nimesh.fullstack.repository.ExpenseRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;

    @PostMapping("/expense")
    Expense newExpense(@RequestBody Expense newExpense){
        return expenseRepository.save(newExpense);
    }

    @GetMapping("/expenses")
    List<Expense> getAllExpenses(){
        return expenseRepository.findAll();
    }
    
    @GetMapping("/expense/{id}")
    Expense getExpenseById(@PathVariable Long id){
        return expenseRepository.findById(id).orElseThrow();
    }

    @PutMapping("/expense/{id}")
    Expense updateExpense(@RequestBody Expense newExpense,@PathVariable Long id){
        return expenseRepository.findById(id)
                .map(expense -> {
                    expense.setExpenseName(newExpense.getExpenseName());
                    expense.setAmount(newExpense.getAmount());
                    expense.setDate(newExpense.getDate());
                    expense.setDescription(newExpense.getDescription());
                    return expenseRepository.save(expense);
                }).orElseThrow();
    }

    @DeleteMapping("/expense/{id}")
    String deleteExpense(@PathVariable Long id){
        expenseRepository.deleteById(id);
        return "Expense deleted successfully";
    }
}