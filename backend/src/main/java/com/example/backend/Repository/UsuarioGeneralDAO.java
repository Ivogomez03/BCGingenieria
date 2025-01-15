package com.example.backend.Repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.Models.UsuarioGeneral;

public interface UsuarioGeneralDAO extends JpaRepository<UsuarioGeneral, UUID> {
    Optional<UsuarioGeneral> findByNombreUsuario(String nombreUsuario);
}