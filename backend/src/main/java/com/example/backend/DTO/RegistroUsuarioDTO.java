package com.example.backend.DTO;

import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegistroUsuarioDTO {
    private UUID idUsuario;
    private String nombreUsuario;
    private String contrasena;
    private String nombre;
    private String apellido;
    private int dni;
    private String email;
    private String direccion;
    private String localidad;
    private int edad;
}
