package com.application.stage.services;

import com.application.stage.model.Coordonne;
import com.application.stage.model.Mobilite;
import com.application.stage.repositories.CoordonneRepository;
import com.application.stage.repositories.MobiliteRepository;
import com.application.stage.user.User;
import com.application.stage.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service

public class Services implements  IServices {

    @Autowired
    UserRepository userRepository ;

    @Autowired
    MobiliteRepository mobiliteRepository ;

    @Autowired
    CoordonneRepository coordonneRepository ;




        @Override
        public void ajoutermobilite(Mobilite m, int idUser) {
            User u = userRepository.findById(idUser).get();
            m.setUser(u);




            mobiliteRepository.save(m);
        }

    @Override
    public List<Mobilite> getMobilites() {
        return  (List<Mobilite>) mobiliteRepository.findAll();
    }

    @Override
    public Optional<Mobilite> getMobilite(long idMob) {
        return mobiliteRepository.findById(idMob);
    }

    @Override
    public void supprimermobilite(long idMob) {
        mobiliteRepository.deleteById(idMob);
    }

    @Override
    public void ajoutercoordonnee(long idMob,int idUser,  Coordonne coordonne ) {
        Mobilite mobilite=mobiliteRepository.findById(idMob).get();
        User user =userRepository.findById(idUser).get();
float moyenne =(coordonne.getMoyenne1()+coordonne.getMoyenne2()+coordonne.getMoyenne3())/3;
        if ("A1".equals(coordonne.getNiveaua())) {
            moyenne += 0;
        }
        if ("A2".equals(coordonne.getNiveaua())) {
            moyenne += 3;
        }
        if ("B1".equals(coordonne.getNiveaua())) {
            moyenne += 6;
        }
        if ("B2".equals(coordonne.getNiveaua())) {
            moyenne += 9;
        }
        if ("C1".equals(coordonne.getNiveaua())) {
            moyenne += 12;
        }
        if ("C2".equals(coordonne.getNiveaua())) {
            moyenne += 15;
        }
        if ("A1".equals(coordonne.getNiveauf())) {
            moyenne += 0;
        }
        if ("A2".equals(coordonne.getNiveauf())) {
            moyenne += 3;
        }
        if ("B1".equals(coordonne.getNiveauf())) {
            moyenne += 6;
        }
        if ("B2".equals(coordonne.getNiveauf())) {
            moyenne += 9;
        }
        if ("C1".equals(coordonne.getNiveauf())) {
            moyenne += 12;
        }
        if ("C2".equals(coordonne.getNiveauf())) {
            moyenne += 15;
        }


coordonne.setMoyenne(moyenne);
        coordonne.setUser(user);
        coordonne.setMobilite(mobilite);

        coordonneRepository.save(coordonne);

    }
/*
    private float getNoteValue(String niveau) {
        // Map des valeurs de notes de langue
        Map<String, Float> noteValues = new HashMap<>();
        noteValues.put("A1", 3f);
        noteValues.put("A2", 6f);
        noteValues.put("B1", 9f);
        noteValues.put("B2", 13f);
        noteValues.put("C1", 16f);
        noteValues.put("C2", 20f);

        return noteValues.getOrDefault(niveau, 0f); // 0 si la note n'est pas trouvée
    }
*/

    @Override
    public List<Coordonne> getCoordoner() {
        return coordonneRepository.findAll();
    }

    @Override
    public List<Coordonne> getCordonnerByMobilite(long idMob) {
        Mobilite mobilite=mobiliteRepository.findById(idMob).get();
List<Coordonne> coordonnes=mobilite.getCoordonnes();

        return coordonnes;
    }

    @Override
    public String deletMobilite(long idMob) {
 mobiliteRepository.deleteById(idMob);
    return "votre mobilite est supprimer";}


}
