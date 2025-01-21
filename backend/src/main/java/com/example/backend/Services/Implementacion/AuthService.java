package com.example.backend.Services.Implementacion;

import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.backend.DTO.AuthResponseDTO;
import com.example.backend.DTO.LoginRequestDTO;
import com.example.backend.DTO.RegistroUsuarioDTO;
import com.example.backend.Models.Role;
import com.example.backend.Models.UsuarioGeneral;
import com.example.backend.Repository.AdministradorDAO;
import com.example.backend.Repository.UsuarioGeneralDAO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
        @Autowired
        private final UsuarioGeneralDAO usuarioGeneralDAO;
        private final AdministradorDAO administradorDAO;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;
        private final PasswordEncoder passwordEncoder;
        private final UsuarioGeneralServicio usuarioGeneralServicio;
        private final AdministradorServicio administradorServicio;

        public AuthResponseDTO login(LoginRequestDTO request) {
                System.out.println("Autenticando usuario: " + request.getNombreUsuario());
                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(request.getNombreUsuario(),
                                                request.getContrasena()));
                System.out.println("Autenticación exitosa para: " + request.getNombreUsuario());
                // Intentar buscar primero en Administradores
                UserDetails usuario = administradorDAO
                                .findByNombreUsuario(request.getNombreUsuario())
                                .<UserDetails>map(admin -> admin) // Si es un administrador
                                .orElseGet(() -> usuarioGeneralDAO
                                                .findByNombreUsuarioAndHabilitadoTrue(request.getNombreUsuario())
                                                .orElseThrow(() -> new IllegalArgumentException(
                                                                "Usuario no encontrado")));
                System.out.println(usuario);
                String token = jwtService.getToken(usuario);
                return AuthResponseDTO.builder()
                                .token(token)
                                .build();
        }

        public AuthResponseDTO registrar(RegistroUsuarioDTO request) {
                System.out.println("Iniciando registro de usuario...");

                if (usuarioGeneralServicio.buscarUsuarioGeneral(request.getNombreUsuario()) != null) {
                        throw new DataIntegrityViolationException("El nombre de usuario ya existe");
                }

                if (administradorServicio.buscarAdministrador(request.getNombreUsuario()) != null) {
                        throw new DataIntegrityViolationException("El nombre de usuario ya existe");
                }

                if (!usuarioGeneralServicio.validarContrasena(request.getContrasena()).equals("Contraseña valida")) {
                        throw new RuntimeException(usuarioGeneralServicio.validarContrasena(request.getContrasena()));
                }

                UsuarioGeneral usuarioGeneral = UsuarioGeneral.builder()
                                .nombreUsuario(request.getNombreUsuario())
                                .contrasena(passwordEncoder.encode(request.getContrasena()))
                                .edad(request.getEdad())
                                .apellido(request.getApellido())
                                .nombre(request.getNombre())
                                .localidad(request.getLocalidad())
                                .direccion(request.getDireccion())
                                .dni(request.getDni())
                                .email(request.getEmail())
                                .role(Role.USUARIO_GENERAL)
                                .habilitado(true)
                                .build();
                System.out.println("Guardando usuario en la base de datos...");
                usuarioGeneralDAO.save(usuarioGeneral);
                System.out.println("Usuario guardado correctamente.");
                return AuthResponseDTO.builder()
                                .token(jwtService.getToken(usuarioGeneral))
                                .build();
        }

}
