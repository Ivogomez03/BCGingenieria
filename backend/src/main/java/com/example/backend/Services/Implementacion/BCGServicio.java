package com.example.backend.Services.Implementacion;

import org.springframework.stereotype.Service;

import com.example.backend.Models.BCG;
import com.example.backend.Repository.BCGDAO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BCGServicio {

    private BCGDAO bcgDAO;

    public BCG buscarBCG(String nombreUsuario) {

        BCG bcg = bcgDAO.findByNombreUsuario(nombreUsuario).orElse(null);

        if (bcg == null) {

            throw new RuntimeException("El usuario no ha sido encontrado");

        }

        return bcg;

    }
}
