package com.application.stage.repositories;

import com.application.stage.model.Coordonne;
import com.application.stage.model.Mobilite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MobiliteRepository extends JpaRepository<Mobilite,Long> {
}
