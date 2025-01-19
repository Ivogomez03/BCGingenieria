package com.example.backend.Repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.backend.Models.Administrador;

@Repository
public interface AdministradorDAO extends JpaRepository<Administrador, UUID> {

    @Query("SELECT a FROM Administrador a WHERE a.nombreUsuario = :nombreUsuario")
    Administrador findByNombreUsuario(String nombreUsuario);
}