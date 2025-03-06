package com.example.backend.Models;

import java.util.UUID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InfoInversion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idInfoInversion;

    @Column(nullable = false)
    private String categoria;
    @Column(nullable = false)
    private String tipo;
    @Column(nullable = false)
    private Double inversionInicial;
    @Column(nullable = false)
    private Double tir;
    @Column(nullable = false)
    private Integer anioRecupero;
    @Column(nullable = false)
    private String propiedad;
    @Column(nullable = false)
    private boolean disponible;

    @ManyToOne
    @JoinColumn(name = "idProyecto", referencedColumnName = "idProyecto")
    private Proyecto proyecto;

}