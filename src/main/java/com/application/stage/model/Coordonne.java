package com.application.stage.model;

import com.application.stage.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
public class Coordonne  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idCoordonne;
    float moyenne1 ;
    float moyenne2 ;
    float moyenne3 ;
    float moyenne ;
   String nom ;
   String prenom ;
   String gmail ;
   String identifiantEsprit ;
   String classeActuelle ;
   String Departement ;
   String Option ;
   String niveaua ;
   String niveauf ;
    @Lob
    private byte[] fichierCV;

    @JsonIgnore
    @ManyToOne
    Mobilite mobilite ;
    @JsonIgnore
    @ManyToOne
    User user;

}
