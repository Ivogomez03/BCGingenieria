package com.example.backend.Services.Implementacion;

import org.springframework.stereotype.Service;
import com.example.backend.Models.Administrador;
import com.example.backend.Repository.AdministradorDAO;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdministradorServicio {

    private final AdministradorDAO administradorDAO;

    public Administrador buscarAdministrador(String nombreUsuario) {
        return administradorDAO.findByNombreUsuario(nombreUsuario).orElse(null);

    }

}
