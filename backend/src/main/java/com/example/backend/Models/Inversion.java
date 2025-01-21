package com.example.backend.Models;

import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Inversion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idVenta;

    @ManyToOne
    @JoinColumn(name = "idUsuario", referencedColumnName = "idUsuario")
    private UsuarioGeneral usuarioInversor;

    @OneToOne
    @JoinColumn(name = "idProyecto", referencedColumnName = "idProyecto")
    private Proyecto proyecto;

    @Column(nullable = false)
    private Date fechaVenta;

    @Column(nullable = false)
    private double montoTotal;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipoTransferencia", nullable = false)
    private TipoTransferencia tipoTransferencia;
}
