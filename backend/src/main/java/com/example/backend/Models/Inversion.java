package com.example.backend.Models;

import java.util.Date;
import java.util.UUID;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class Inversion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID idVenta;

    @ManyToOne
    @JoinColumn(name = "idUsuario", referencedColumnName = "idUsuario")
    private UsuarioGeneral usuarioInversor;

    @ManyToOne
    @JoinColumn(name = "idProyecto", referencedColumnName = "idProyecto")
    private Proyecto proyecto;

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
