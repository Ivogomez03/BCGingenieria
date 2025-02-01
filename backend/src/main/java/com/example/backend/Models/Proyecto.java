package com.example.backend.Models;

import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Proyecto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idProyecto;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String descripcion;

    @Column(nullable = false)
    private Date fechaCreacion;

    @Column(nullable = false)
    private boolean disponible;

    @Column(nullable = false)
    private double precioKW;

    @Column(nullable = true)
    private double potencia;

    @Column(nullable = false)
    private double montoMinimoAinvertir;

    @Column(nullable = true)
    private double huellaCarbonoAhorrada;

    @Column(nullable = true)
    private double generacionAnual;

    @Column(nullable = true)
    private double unidadesDisponibles;

    @Column(nullable = true)
    private double inversionHechaHastaAhora;
}
