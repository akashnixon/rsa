package com.akashnixon.rsa.model;

import java.math.BigInteger;

public class EncryptionRequest {
    private String message;
    private BigInteger N; // Field for N
    private BigInteger e; // Field for e

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public BigInteger getN() {
        return N;
    }

    public void setN(BigInteger N) {
        this.N = N;
    }

    public BigInteger getE() {
        return e;
    }

    public void setE(BigInteger e) {
        this.e = e;
    }
}
