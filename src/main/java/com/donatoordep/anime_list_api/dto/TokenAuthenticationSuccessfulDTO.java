package com.donatoordep.anime_list_api.dto;

import java.time.Instant;

public class TokenAuthenticationSuccessfulDTO {

    private String login;
    private Instant loginMoment = Instant.now();
    private String issuer;
    private String token;

    public TokenAuthenticationSuccessfulDTO(String token, String login, String issuer) {
        this.login = login;
        this.issuer = issuer;
        this.token = token;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Instant getLoginMoment() {
        return loginMoment;
    }

    public void setLoginMoment(Instant loginMoment) {
        this.loginMoment = loginMoment;
    }

    public String getIssuer() {
        return issuer;
    }

    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
