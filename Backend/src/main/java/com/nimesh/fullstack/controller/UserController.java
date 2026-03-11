package com.nimesh.fullstack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.nimesh.fullstack.model.User;
import com.nimesh.fullstack.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // REGISTER
    @PostMapping("/register")
    User registerUser(@RequestBody User user){
        return userRepository.save(user);
    }

    // LOGIN
    @PostMapping("/login")
    User loginUser(@RequestBody User user){

        User existingUser = userRepository.findByUsername(user.getUsername());

        if(existingUser != null && existingUser.getPassword().equals(user.getPassword())){
            return existingUser;
        }

        throw new RuntimeException("Invalid username or password");
    }

}