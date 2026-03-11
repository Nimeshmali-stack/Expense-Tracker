package com.nimesh.fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nimesh.fullstack.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

    User findByUsername(String username);
}