package com.example.backend.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class UsuarioGeneral extends Usuario {
    @Column(nullable = false)
    private boolean esCliente;
    @Column(nullable = false)
    private boolean habilitado;

}
