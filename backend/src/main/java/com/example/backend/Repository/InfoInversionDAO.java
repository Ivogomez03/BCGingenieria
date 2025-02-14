package com.example.backend.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.backend.Models.InfoInversion;

public interface InfoInversionDAO extends JpaRepository<InfoInversion, UUID> {
    @Query("SELECT i FROM InfoInversion i WHERE i.idInfoInversion = :idInfoInversion AND i.disponible = true")
    Optional<InfoInversion> findById(UUID idInfoInversion);

    @Query("SELECT i FROM InfoInversion i WHERE i.proyecto.idProyecto = :idProyecto AND i.disponible = true")
    List<InfoInversion> findByIdProyecto(UUID idProyecto);

}
