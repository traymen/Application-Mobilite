package com.application.stage.config;

import com.application.stage.token.TokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {
  private final TokenRepository tokenRepository ;
    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {

        final String authHeader = request.getHeader("Authorization");
        final String jwt;

        if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
            return;
        }
        jwt = authHeader.substring(7);
        var storedtoken = tokenRepository.findByToken(jwt)
                .orElse(null);
        if (storedtoken !=null){
            storedtoken.setExpired(true);
            storedtoken.setRevoked(true);
            tokenRepository.save(storedtoken);
        }

    }
}
