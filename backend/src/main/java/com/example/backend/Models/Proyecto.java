package com.example.backend.Models;

import java.util.Date;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Proyecto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProyecto;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String descripcion;

    @Column(nullable = false)
    private Date fecha_creacion;

    @Column(nullable = false)
    private double precio_kw;

    @Column(nullable = true)
    private double potencia;

    @Column(nullable = true)
    private double huellaCarbonoAhorrada;

    @Column(nullable = true)
    private double generacionAnual;

    @Column(nullable = true)
    private double unidadesDisponibles;

    @Column(nullable = true)
    private double inversionHechaHastaAhora;
}
