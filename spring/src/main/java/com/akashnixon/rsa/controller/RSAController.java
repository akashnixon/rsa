package com.akashnixon.rsa.controller;

import com.akashnixon.rsa.model.EncryptionRequest;
import com.akashnixon.rsa.service.RSAService;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/rsa")
@CrossOrigin(origins = "http://localhost:3000")
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
    public List<BigInteger> signMessage(
            @RequestBody Map<String, String> request
    ) {
        String message = request.get("message");
        return rsaService.sign(message, rsaService.getN(), rsaService.getD());
    }

    @PostMapping("/verify")
    public boolean verifySignature(@RequestBody Map<String, Object> request) {
        String message = request.get("message").toString();
        String signatureStrings = request.get("signature").toString();
        String cleanedInput = signatureStrings
                .replace("[", "")
                .replace("]", "")
                .trim();
        String[] signatureArray = cleanedInput.split(",");

        List<String> signatureList = new ArrayList<>();
        for (String chunk : signatureArray) {
            signatureList.add(chunk.trim());
        }
        BigInteger N = new BigInteger(request.get("N").toString());
        BigInteger e = new BigInteger(request.get("e").toString());

        List<BigInteger> signatureChunks = signatureList
                .stream()
                .map(sig -> new BigInteger(sig.trim()))
                .toList();

        return rsaService.verify(message, signatureChunks, N, e);
    }
}
