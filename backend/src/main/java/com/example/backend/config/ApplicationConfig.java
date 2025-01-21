package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.backend.Repository.AdministradorDAO;
import com.example.backend.Repository.UsuarioGeneralDAO;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    private final UsuarioGeneralDAO usuarioGeneralDAO;
    private final AdministradorDAO administradorDAO;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailService() {

        return username -> {
            // Buscar en AdministradorDAO
            return administradorDAO.findByNombreUsuario(username)
                    .<UserDetails>map(admin -> admin) // Si es un administrador, devolverlo como UserDetails
                    .orElseGet(() ->
            // Si no lo encuentra en AdministradorDAO, buscar en UsuarioGeneralDAO
            usuarioGeneralDAO.findByNombreUsuarioAndHabilitadoTrue(username)
                    .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado")));
        };
    }
}
