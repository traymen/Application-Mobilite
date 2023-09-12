package com.application.stage.token;

import com.application.stage.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
public class Token {
    @Id
    @GeneratedValue
    private  Integer id;
    private  String token ;

    @Enumerated(EnumType.STRING)
    private  TokenType tokenType;
    private  boolean expired ;
    private boolean revoked ;
    @ManyToOne
    private User user ;
}
