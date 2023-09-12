package com.application.stage.auth;

public class LogoutResponse {
    private String message;

    public LogoutResponse(String message) {
        this.message = message;
    }

    // Getters et setters (ou utilisez Lombok pour les générer automatiquement)
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
