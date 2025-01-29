package com.example.backend.Repository;

import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.backend.Models.BCG;

public interface BCGDAO extends JpaRepository<BCG, UUID> {
    @Query("SELECT b FROM BCG b WHERE b.nombreUsuario = :nombreUsuario")
    Optional<BCG> findByNombreUsuario(String nombreUsuario);
}
