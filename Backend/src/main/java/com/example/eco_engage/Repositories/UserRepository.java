package com.example.eco_engage.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.eco_engage.model.User;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
    Optional<User> findByUsername(String username);
}
