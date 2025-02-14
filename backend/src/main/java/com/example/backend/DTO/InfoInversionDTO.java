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
public class InfoInversionDTO {
    private UUID idInfoInversion;
    private String categoria;
    private String tipo;
    private Double inversionInicial;
    private Double tir;
    private Integer anioRecupero;
    private String propiedad;
    private boolean disponible;
    private UUID idProyecto;
}
