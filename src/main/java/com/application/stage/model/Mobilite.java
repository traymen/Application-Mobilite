package com.application.stage.model;


import com.application.stage.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
public class Mobilite  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idMobilite;
    String nomFac ;
    String pays ;
    String typeMobilite ;
    String domaine ;
    @DateTimeFormat
     Date dateD ;
    @DateTimeFormat
      Date dateF ;
 String option ;
    @JsonIgnore
    @ManyToOne
    User user;
    @JsonIgnore
    @OneToMany(mappedBy = "mobilite", cascade = CascadeType.REMOVE)
    List<Coordonne> coordonnes;



}
