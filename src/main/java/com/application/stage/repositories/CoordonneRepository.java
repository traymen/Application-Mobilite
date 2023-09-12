package com.application.stage.repositories;

import com.application.stage.model.Coordonne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoordonneRepository extends JpaRepository<Coordonne,Long> {
}
