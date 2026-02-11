package com.example.eco_engage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.eco_engage.model.User;
import com.example.eco_engage.Repositories.UserRepository;
import com.example.eco_engage.request.LoginRequest;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    // ✅ REGISTER
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {

        try {
            logger.info("Attempting to register user with email: {}", user.getEmail());
            logger.debug("User registration request received - Username: {}, Email: {}", user.getUsername(), user.getEmail());

            if (userRepository.existsByEmail(user.getEmail())) {
                logger.warn("Registration failed: Email already exists - {}", user.getEmail());
                return ResponseEntity.badRequest().body("Email already exists!");
            }

            if (userRepository.existsByUsername(user.getUsername())) {
                logger.warn("Registration failed: Username already taken - {}", user.getUsername());
                return ResponseEntity.badRequest().body("Username already taken!");
            }

            // 🔐 Hash password before saving
            logger.debug("Encoding password for user: {}", user.getUsername());
            user.setPassword(passwordEncoder.encode(user.getPassword()));

            User savedUser = userRepository.save(user);
            logger.info("User registered successfully with ID: {}, Username: {}", savedUser.getId(), savedUser.getUsername());

            return ResponseEntity.ok("User registered successfully!");
        } catch (Exception e) {
            logger.error("Error during user registration: {}", e.getMessage(), e);
            return ResponseEntity.badRequest().body("Registration failed: " + e.getMessage());
        }
    }

    // ✅ LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {

        try {
            logger.info("Attempting login for username: {}", loginRequest.getUsername());
            logger.debug("Login request received with username: {}", loginRequest.getUsername());

            Optional<User> userOptional = userRepository.findByUsername(loginRequest.getUsername());

            if (userOptional.isEmpty()) {
                logger.warn("Login failed: User not found - Username: {}", loginRequest.getUsername());
                return ResponseEntity.badRequest().body("User not found!");
            }

            User user = userOptional.get();
            logger.debug("User found in database - ID: {}, Username: {}", user.getId(), user.getUsername());

            // 🔐 Compare hashed password
            boolean passwordMatches = passwordEncoder.matches(loginRequest.getPassword(), user.getPassword());
            logger.debug("Password validation result for user {}: {}", user.getUsername(), passwordMatches);

            if (!passwordMatches) {
                logger.warn("Login failed: Invalid credentials for username - {}", user.getUsername());
                return ResponseEntity.badRequest().body("Invalid credentials!");
            }

            logger.info("Login successful for user: {} (ID: {})", user.getUsername(), user.getId());
            return ResponseEntity.ok("Login successful!");
        } catch (Exception e) {
            logger.error("Error during login attempt for username {}: {}", loginRequest.getUsername(), e.getMessage(), e);
            return ResponseEntity.badRequest().body("Login failed: " + e.getMessage());
        }
    }
}
