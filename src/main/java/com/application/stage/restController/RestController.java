package com.application.stage.restController;

import com.application.stage.model.Coordonne;
import com.application.stage.model.Mobilite;
import com.application.stage.services.IServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/api/v1/public")
@CrossOrigin(origins = "*")

public class RestController {
    @Autowired
    IServices iServices ;

    @PutMapping("/AjouterMobilite")
    String ajouterpost(@RequestBody Mobilite m, @RequestParam int idUser){



        iServices.ajoutermobilite(m,idUser); ;

        return "votre mobilite est ajouter avec succes" ;

    }




    @GetMapping("/AfficherMobilite")
    public List<Mobilite> getmobilite (){
        return iServices.getMobilites();
    }
    @GetMapping("/AfficherMobilitee")
    public Optional<Mobilite> getmobilitee (@RequestParam long idMob){
        return iServices.getMobilite(idMob);
    }

    @DeleteMapping("/SupprimerMobilite")
    public void suppmobilite (@RequestParam long idMob){
         iServices.supprimermobilite(idMob);
    }

    @PutMapping("/Ajouterrcoordonner")

    public  void ajoutecoordonner(@RequestParam long idMob  ,@RequestParam int idUser ,@RequestBody Coordonne coordonne){

        iServices.ajoutercoordonnee((int) idMob,idUser,coordonne);

    }

    @GetMapping("/AfficherCoordoner")
    public List<Coordonne> getCoordonne (){
        return iServices.getCoordoner();
    }

    @GetMapping("/afficherCordonneeMobilite")

    public List<Coordonne> afficherCordone(@RequestParam long idMob){

        return iServices.getCordonnerByMobilite(idMob);
    }

    @DeleteMapping("/deletMobilite")
    public void delete (@RequestParam long idMob){
         iServices.deletMobilite(idMob);

    }
}
