package com.example.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.DTO.AuthResponseDTO;
import com.example.backend.DTO.LoginRequestDTO;
import com.example.backend.DTO.RegistroUsuarioDTO;
import com.example.backend.Models.Role;
import com.example.backend.Models.UsuarioGeneral;
import com.example.backend.Repository.UsuarioGeneralDAO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    @Autowired
    private final UsuarioGeneralDAO usuarioGeneralDAO;
    private final JwtService jwtService;

    public AuthResponseDTO login(LoginRequestDTO request) {
        return null;
    }

    public AuthResponseDTO registrar(RegistroUsuarioDTO request) {
        UsuarioGeneral usuarioGeneral = UsuarioGeneral.builder()
                .nombreUsuario(request.getNombreUsuario())
                .contrasena(request.getContrasena())
                .edad(request.getEdad())
                .apellido(request.getApellido())
                .nombre(request.getNombre())
                .localidad(request.getLocalidad())
                .direccion(request.getDireccion())
                .dni(request.getDni())
                .email(request.getEmail())
                .role(Role.USUARIO_GENERAL)
                .build();
        usuarioGeneralDAO.save(usuarioGeneral);

        return AuthResponseDTO.builder()
                .token(jwtService.getToken(usuarioGeneral))
                .build();
    }

}
