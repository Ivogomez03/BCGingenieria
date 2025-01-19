package com.example.backend.Services.Implementacion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
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
        private final AuthenticationManager authenticationManager;

        public AuthResponseDTO login(LoginRequestDTO request) {
                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(request.getNombreUsuario(),
                                                request.getContrasena()));
                UserDetails usuarioGeneral = usuarioGeneralDAO
                                .findByNombreUsuarioAndHabilitadoTrue(request.getNombreUsuario())
                                .orElseThrow();
                String token = jwtService.getToken(usuarioGeneral);
                return AuthResponseDTO.builder()
                                .token(token)
                                .build();
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
