package com.donatoordep.anime_list_api.controllers;

import com.donatoordep.anime_list_api.dto.AuthenticationDTO;
import com.donatoordep.anime_list_api.dto.TokenAuthenticationSuccessfulDTO;
import com.donatoordep.anime_list_api.dto.UserDTO;
import com.donatoordep.anime_list_api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping(path = "/v1/auth")
public class AuthController {

    @Autowired
    private UserService service;

    @PostMapping(path = "/register")
    public ResponseEntity<UserDTO> register(@RequestBody UserDTO dto) {
        UserDTO objectCreated = service.register(dto);
        return ResponseEntity.created(ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(objectCreated.getId()).toUri()).body(objectCreated);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<TokenAuthenticationSuccessfulDTO> login(@RequestBody AuthenticationDTO dto) {
        return ResponseEntity.ok().body(service.login(dto));
    }
}
