package com.akashnixon.rsa.controller;

import com.akashnixon.rsa.service.RSAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/rsa")
@CrossOrigin(origins = "http://localhost:3000") // Enable CORS for the frontend
public class RSAController {

    @Autowired
    private RSAService rsaService;

    // Endpoint to encrypt a message
    @PostMapping("/encrypt")
    public String encrypt(@RequestBody MessageRequest request) {
        return rsaService.encrypt(request.getMessage());
    }

    // Endpoint to decrypt a ciphertext
    @PostMapping("/decrypt")
    public String decrypt(@RequestBody MessageRequest request) {
        return rsaService.decrypt(request.getMessage());
    }

    // Endpoint to retrieve public key
    @GetMapping("/public-key")
    public String getPublicKey() {
        return rsaService.getPublicKey();
    }

    // Endpoint to retrieve private key
    @GetMapping("/private-key")
    public String getPrivateKey() {
        return rsaService.getPrivateKey();
    }

    // Endpoint to retrieve additional details (p, q, phi)
    @GetMapping("/details")
    public String getDetails() {
        return rsaService.getDetails();
    }
}

class MessageRequest {
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
