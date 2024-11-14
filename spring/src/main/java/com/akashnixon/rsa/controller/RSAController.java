package com.akashnixon.rsa.controller;

import com.akashnixon.rsa.model.EncryptionRequest;
import com.akashnixon.rsa.service.RSAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/rsa")
@CrossOrigin(origins = "http://localhost:3000") // Enable CORS for the frontend
public class RSAController {

    @Autowired
    private RSAService rsaService;

    @PostMapping("/encrypt")
    public List<BigInteger> encrypt(@RequestBody Map<String, Object> request) {
        String message = request.get("message").toString();
        String N = request.get("N") != null ? request.get("N").toString() : null;
        String e = request.get("e").toString();
        return rsaService.encrypt(message, new BigInteger(N), new BigInteger(e));
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

    @PostMapping("/sign")
    public BigInteger signMessage(@RequestBody Map<String, String> request) {
        String message = request.get("message");
        return rsaService.sign(message, rsaService.getN(), rsaService.getD());
    }

    @PostMapping("/verify")
    public boolean verifySignature(@RequestBody Map<String, Object> request) {
        String message = request.get("message").toString();
        BigInteger signature = new BigInteger(request.get("signature").toString());
        BigInteger N = new BigInteger(request.get("N").toString());
        BigInteger e = new BigInteger(request.get("e").toString());
        return rsaService.verify(message, signature, N, e);
    }
}
