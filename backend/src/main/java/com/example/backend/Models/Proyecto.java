package com.example.backend.Models;

import java.util.Date;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;

@Data
@Entity
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

    @Column(nullable = false)
    private double potencia;

    @Column(nullable = false)
    private double huella_carbono_ahorrada;

    @Column(nullable = false)
    private double generacion_anual;

    @Column(nullable = false)
    private double unidades_disponibles;
}
