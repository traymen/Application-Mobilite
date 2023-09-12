package com.application.stage.auth;

import com.application.stage.config.LogoutService;
import com.application.stage.model.Mobilite;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")

@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    private final LogoutService logoutService;


    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }


    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody  AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

/*
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {
        logoutService.logout(request, response, null); // Passing null as Authentication since the user is already logged out
        return ResponseEntity.ok("Logged out successfully");
    }
*/
@PostMapping("/logout")
public ResponseEntity<LogoutResponse> logout(HttpServletRequest request, HttpServletResponse response) {
    logoutService.logout(request, response, null); // Passing null as Authentication since the user is already logged out
    return ResponseEntity.ok(new LogoutResponse("Logged out successfully"));
}







}
