package com.akashnixon.rsa.model;

import java.math.BigInteger;

public class EncryptionRequest {
    private String message;
    private BigInteger N;
    private BigInteger e;

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
