package com.example.backend.Repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.backend.Models.Proyecto;

public interface ProyectoDAO extends JpaRepository<Proyecto, UUID> {
    @Query("SELECT p FROM Proyecto p WHERE u.nombreProyecto = :nombreProyecto")
    Optional<Proyecto> findByNombre(String nombreProyecto);

}
