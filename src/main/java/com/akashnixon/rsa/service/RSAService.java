package com.akashnixon.rsa.service;

import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.security.SecureRandom;

@Service
public class RSAService {

    private BigInteger p, q, N, phi, e, d;
    final private int bitLength = 16;
    private SecureRandom random;

    public RSAService() {
        random = new SecureRandom();
        generateKeys();
    }

    // Generate RSA keys
    private void generateKeys() {
        p = BigInteger.probablePrime(bitLength, random);
        q = BigInteger.probablePrime(bitLength, random);
        N = p.multiply(q);
        phi = (p.subtract(BigInteger.ONE)).multiply(q.subtract(BigInteger.ONE));

        // Select public key 'e'
        e = BigInteger.probablePrime(bitLength / 2, random);
        while (phi.gcd(e).intValue() > 1) {
            e = e.add(BigInteger.ONE);
        }

        // Compute private key 'd'
        d = e.modInverse(phi);
    }

    // Encrypt a message
    public String encrypt(String message) {
        BigInteger plaintext = new BigInteger(message.getBytes());
        BigInteger ciphertext = plaintext.modPow(e, N);
        return ciphertext.toString();
    }

    // Decrypt a message
    public String decrypt(String ciphertext) {
        BigInteger cipherInt = new BigInteger(ciphertext);
        BigInteger decrypted = cipherInt.modPow(d, N);
        return new String(decrypted.toByteArray());
    }

    // Get public key details
    public String getPublicKey() {
        return "Public Key (N, e): " + N + ", " + e;
    }

    // Get private key details
    public String getPrivateKey() {
        return "Private Key (N, d): " + N + ", " + d;
    }

    // Get additional details
    public String getDetails() {
        return "p: " + p + ", q: " + q + ", phi: " + phi;
    }
}
