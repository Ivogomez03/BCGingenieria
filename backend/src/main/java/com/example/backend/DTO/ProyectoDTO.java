package com.example.backend.DTO;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProyectoDTO {
    private UUID idProyecto;
    private String nombre;
    private String descripcion;
    private double precioKW;
    private double potencia;
    private double huellaCarbonoAhorrada;
    private double generacionAnual;
    private double unidadesDisponibles;
    private double inversionHechaHastaAhora;
    private double montoMinimoAinvertir;
    private boolean disponible;
    private List<InfoInversionDTO> listaDeInfoInversiones;
    private String urlMasInfoImagen;

}
