package com.example.backend.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.backend.Models.Proyecto;

public interface ProyectoDAO extends JpaRepository<Proyecto, UUID> {
    @Query("SELECT p FROM Proyecto p WHERE p.nombre = :nombre")
    Optional<Proyecto> findByNombre(String nombre);

    @Query("SELECT p FROM Proyecto p WHERE p.nombre LIKE %:nombre%")
    List<Proyecto> findByNombreNoExact(String nombre);

}
