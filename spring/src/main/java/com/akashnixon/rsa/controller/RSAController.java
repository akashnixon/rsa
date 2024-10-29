package com.akashnixon.rsa.controller;

import com.akashnixon.rsa.model.EncryptionRequest;
import com.akashnixon.rsa.service.RSAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping("/api/rsa")
@CrossOrigin(origins = "http://localhost:3000") // Enable CORS for the frontend
public class RSAController {

    @Autowired
    private RSAService rsaService;

    @PostMapping("/encrypt")
    public List<BigInteger> encrypt(@RequestBody EncryptionRequest request) {
        // Use N and e from the request to encrypt the message
        return rsaService.encrypt(request.getMessage(), request.getN(), request.getE());
    }

    @PostMapping("/decrypt")
    public String decrypt(@RequestBody EncryptionRequest request) {
        return rsaService.decrypt(request.getMessage());
    }

    @GetMapping("/public-key")
    public String getPublicKey() {
        return rsaService.getPublicKey();
    }

    @GetMapping("/private-key")
    public String getPrivateKey() {
        return rsaService.getPrivateKey();
    }

    @GetMapping("/details")
    public String getDetails() {
        return rsaService.getDetails();
    }
}
