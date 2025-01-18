package com.example.backend.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.backend.Models.UsuarioGeneral;

@Repository
public interface UsuarioGeneralDAO extends JpaRepository<UsuarioGeneral, UUID> {
    @Query("SELECT u FROM UsuarioGeneral u WHERE u.apellido LIKE %:apellido% AND u.habilitado = true")
    List<UsuarioGeneral> findByApellidoAndHabilitadoTrue(String apellido);

    @Query("SELECT u FROM UsuarioGeneral u WHERE u.nombreUsuario = :nombreUsuario AND u.habilitado = true")
    Optional<UsuarioGeneral> findByNombreUsuarioAndHabilitadoTrue(String nombreUsuario);
}