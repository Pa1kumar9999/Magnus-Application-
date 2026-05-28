package com.magnus.backend.controller;

import com.magnus.backend.entity.User;
import com.magnus.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.Optional;
import java.util.HashMap;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody Map<String, String> request) {

        String credential = request.get("credential");
        String password = request.get("password");

        Optional<User> user = userRepository
                .findByEmailOrMobile(credential, credential);

        if (user.isPresent() &&
                user.get().getPassword().equals(password)) {

            Map<String, String> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("email", user.get().getEmail());
            response.put("role", user.get().getRole());
            return ResponseEntity.ok(response);
        }

        return ResponseEntity.status(401)
                .body(Map.of("message", "Invalid credentials"));
    }
}
