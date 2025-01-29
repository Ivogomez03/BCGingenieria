package com.example.backend.config;

import java.util.Optional;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.backend.Models.Administrador;
import com.example.backend.Models.BCG;
import com.example.backend.Models.UsuarioGeneral;
import com.example.backend.Repository.AdministradorDAO;
import com.example.backend.Repository.BCGDAO;
import com.example.backend.Repository.UsuarioGeneralDAO;
import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    private final UsuarioGeneralDAO usuarioGeneralDAO;
    private final AdministradorDAO administradorDAO;
    private final BCGDAO bcgDAO;

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
            Optional<Administrador> administrador = administradorDAO.findByNombreUsuario(username);
            if (administrador.isPresent()) {
                return administrador.get(); // Devuelve si encuentra en AdministradorDAO
            }

            // Buscar en UsuarioGeneralDAO
            Optional<UsuarioGeneral> usuarioGeneral = usuarioGeneralDAO.findByNombreUsuarioAndHabilitadoTrue(username);
            if (usuarioGeneral.isPresent()) {
                return usuarioGeneral.get(); // Devuelve si encuentra en UsuarioGeneralDAO
            }

            // Buscar en bcgDAO
            Optional<BCG> bcg = bcgDAO.findByNombreUsuario(username);
            if (bcg.isPresent()) {
                return bcg.get(); // Devuelve si encuentra en bcgDAO
            }
            // Si no se encuentra en ninguno, lanzar excepción
            throw new UsernameNotFoundException("Usuario no encontrado: " + username);
        };
    }
}