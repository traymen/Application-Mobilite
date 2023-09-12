package com.application.stage.services;

import com.application.stage.model.Coordonne;
import com.application.stage.model.Mobilite;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface IServices {
     void ajoutermobilite(Mobilite m, int idUser);

    public List<Mobilite> getMobilites();
    public Optional<Mobilite> getMobilite(long idMob);

    void supprimermobilite(long idMob);

    void ajoutercoordonnee(long idMob , int idUser  , Coordonne coordonne);

    public  List<Coordonne> getCoordoner();

    public List<Coordonne> getCordonnerByMobilite(long idMob);

    public String deletMobilite(long idMob);
}
