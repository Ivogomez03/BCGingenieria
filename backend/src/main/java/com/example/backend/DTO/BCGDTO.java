package com.example.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BCGDTO {
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
