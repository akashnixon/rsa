package com.akashnixon.rsa.service;

import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;

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
        p = generatePrime();
        q = generatePrime();
        N = p.multiply(q);
        phi = (p.subtract(BigInteger.ONE)).multiply(q.subtract(BigInteger.ONE));

        // Select public key 'e'
        e = generateE(phi);
        // Compute private key 'd'
        d = modInverse(e, phi);
    }

    // Generate a prime number of specified bit length
    private BigInteger generatePrime() {
        BigInteger prime;
        do {
            prime = new BigInteger(bitLength, random);
        } while (!isProbablePrime(prime));
        return prime;
    }

    // Check if a number is a probable prime (Miller-Rabin primality test)
    private boolean isProbablePrime(BigInteger n) {
        if (n.compareTo(BigInteger.TWO) < 0) return false;
        if (n.equals(BigInteger.TWO)) return true;
        if (mod(n,BigInteger.TWO).equals(BigInteger.ZERO)) return false;

        // Write n-1 as d * 2^r
        BigInteger d = n.subtract(BigInteger.ONE);
        int r = 0;
        while (mod(d,BigInteger.TWO).equals(BigInteger.ZERO)) {
            d = d.shiftRight(1);
            r++;
        }

        // Perform k trials
        for (int i = 0; i < 5; i++) { // 5 iterations for good probability
            BigInteger a = BigInteger.TWO.add(mod(new BigInteger(bitLength, random),n.subtract(BigInteger.TWO)));
            BigInteger x = modPow(a, d, n);
            if (x.equals(BigInteger.ONE) || x.equals(n.subtract(BigInteger.ONE))) continue;

            boolean found = false;
            for (int j = 0; j < r - 1; j++) {
                x = modPow(x, BigInteger.TWO, n);
                if (x.equals(n.subtract(BigInteger.ONE))) {
                    found = true;
                    break;
                }
            }
            if (!found) return false;
        }
        return true;
    }

    private BigInteger generateE(BigInteger phi) {
        BigInteger e;
        do {
            e = new BigInteger(N.bitLength(), random);
        } while (e.compareTo(BigInteger.ONE) <= 0 || e.compareTo(phi) >= 0 || gcd(e, phi).compareTo(BigInteger.ONE) != 0);
        return e;
    }

    private BigInteger gcd(BigInteger a, BigInteger b) {
        while (!b.equals(BigInteger.ZERO)) {
            BigInteger temp = b;
            b = mod(a,b);
            a = temp;
        }
        return a;
    }

    // Compute modular inverse using Extended Euclidean Algorithm
    private BigInteger modInverse(BigInteger a, BigInteger m) {
        BigInteger m0 = m, t, q;
        BigInteger x0 = BigInteger.ZERO, x1 = BigInteger.ONE;

        if (m.equals(BigInteger.ONE)) return BigInteger.ZERO;

        while (a.compareTo(BigInteger.ONE) > 0) {
            q = a.divide(m);
            t = m;

            m = mod(a,m);
            a = t;
            t = x0;

            x0 = x1.subtract(q.multiply(x0));
            x1 = t;
        }

        if (x1.compareTo(BigInteger.ZERO) < 0) x1 = x1.add(m0);

        return x1;
    }

    // Modular exponentiation
    private BigInteger modPow(BigInteger base, BigInteger exponent, BigInteger modulus) {
        BigInteger result = BigInteger.ONE;
        base = mod(base,modulus);
        while (exponent.compareTo(BigInteger.ZERO) > 0) {
            if (mod(exponent,BigInteger.TWO).equals(BigInteger.ONE)) {
                result = mod((result.multiply(base)),modulus);
            }
            exponent = exponent.shiftRight(1);
            base = mod((base.multiply(base)),modulus);
        }
        return result;
    }

    public BigInteger mod(BigInteger a, BigInteger m) {
        if (m.compareTo(BigInteger.ZERO) <= 0) {
            throw new IllegalArgumentException("Modulus must be positive");
        }

        BigInteger result = a.subtract(m.multiply(a.divide(m)));

        if (result.compareTo(BigInteger.ZERO) < 0) {
            result = result.add(m);
        }

        return result;
    }


    public List<BigInteger> encrypt(String message, BigInteger partnerN, BigInteger partnerE) {
        List<BigInteger> encryptedChunks = new ArrayList<>();
        int chunkSize = 3;

        for (int i = 0; i < message.length(); i += chunkSize) {
            String chunk = message.substring(i, Math.min(i + chunkSize, message.length()));

            String hex = new BigInteger(1, chunk.getBytes()).toString(16);

            BigInteger chunkInt = new BigInteger(hex, 16);

            BigInteger encryptedChunk = modPow(chunkInt, e, N);
            encryptedChunks.add(encryptedChunk);
        }

        return encryptedChunks;
    }


    // Decrypt a message
    public String decrypt(String ciphertext) {
        ciphertext = ciphertext.replace("[", "").replace("]", "");
        String[] chunks = ciphertext.split(",");
        List<BigInteger> ciphertextChunks = new ArrayList<>();

        for (String chunk : chunks) {
            ciphertextChunks.add(new BigInteger(chunk.trim()));
        }

        StringBuilder decryptedMessage = new StringBuilder();

        for (BigInteger cipherInt : ciphertextChunks) {
            BigInteger decryptedInt = modPow(cipherInt, d, N);

            String chunk = new String(decryptedInt.toByteArray());
            decryptedMessage.append(chunk);
        }

        return decryptedMessage.toString();
    }


    public String getPublicKey() {
        return "Public Key (N, e): " + N + ", " + e;
    }

    public String getPrivateKey() {
        return "Private Key (N, d): " + N + ", " + d;
    }

    public String getDetails() {
        return "p: " + p + ", q: " + q + ", phi: " + phi;
    }
}
