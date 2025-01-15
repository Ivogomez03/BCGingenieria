package com.example.backend.Models;

import java.util.Date;
import java.util.UUID;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

public class Inversion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID idVenta;

    @Column(nullable = false)
    private UUID idUsuario;

    @Column(nullable = false)
    private UUID idProyecto;

    @Column(nullable = false)
    private Date fechaVenta;

    @Column(nullable = false)
    private double cantidadPaneles;

    @Column(nullable = false)
    private double montoTotal;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipoTransferencia", nullable = false)
    private TipoTransferencia tipoTransferencia;
}
