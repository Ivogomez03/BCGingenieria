package com.example.backend.Services.Implementacion;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import com.example.backend.DTO.InfoInversionDTO;
import com.example.backend.Models.InfoInversion;
import com.example.backend.Models.Proyecto;
import com.example.backend.Repository.InfoInversionDAO;

@Service

public class InfoInversionesServicio {

    private final InfoInversionDAO infoInversionDAO;

    private final ProyectoServicio proyectoServicio;

    @Autowired
    public InfoInversionesServicio(InfoInversionDAO infoInversionDAO, @Lazy ProyectoServicio proyectoServicio) {
        this.infoInversionDAO = infoInversionDAO;
        this.proyectoServicio = proyectoServicio;
    }

    public InfoInversionDTO convertirADTO(InfoInversion infoInversion) {

        InfoInversionDTO dto = new InfoInversionDTO();

        dto.setAnioRecupero(infoInversion.getAnioRecupero());
        dto.setCategoria(infoInversion.getCategoria());
        dto.setIdInfoInversion(infoInversion.getIdInfoInversion());
        dto.setInversionInicial(infoInversion.getInversionInicial());
        dto.setPropiedad(infoInversion.getPropiedad());
        dto.setTipo(infoInversion.getTipo());
        dto.setTir(infoInversion.getTir());
        dto.setDisponible(infoInversion.isDisponible());
        dto.setIdProyecto(infoInversion.getProyecto().getIdProyecto());
        return dto;
    }

    public InfoInversion convertirAInfoInversion(InfoInversionDTO infoInversionDTO) {

        InfoInversion infoInversion = new InfoInversion();

        infoInversion.setAnioRecupero(infoInversionDTO.getAnioRecupero());
        infoInversion.setCategoria(infoInversionDTO.getCategoria());
        infoInversion.setInversionInicial(infoInversionDTO.getInversionInicial());
        infoInversion.setPropiedad(infoInversionDTO.getPropiedad());
        infoInversion.setTipo(infoInversionDTO.getTipo());
        infoInversion.setTir(infoInversionDTO.getTir());
        infoInversion.setDisponible(infoInversionDTO.isDisponible());
        Proyecto proyecto = proyectoServicio.buscarProyectoPorId(infoInversionDTO.getIdProyecto());
        if (proyecto == null)
            throw new RuntimeException("No se ha encontrado ese proyecto");
        infoInversion.setProyecto(proyecto);

        return infoInversion;
    }

    public String modificarInfoInversion(InfoInversionDTO infoInversionDTO) {

        InfoInversion infoInversion = infoInversionDAO.findById(infoInversionDTO.getIdInfoInversion())
                .orElseThrow(() -> new RuntimeException("Información de inversion no encontrada"));

        infoInversion = this.convertirAInfoInversion(infoInversionDTO);

        try {

            infoInversionDAO.save(infoInversion);

        } catch (RuntimeException e) {

            throw new RuntimeException("Error al guardar la información de inversión");

        }

        return "Información de inversión modificada correctamente";
    }

    public String eliminarInfoInversion(UUID idInfoInversion) {
        InfoInversion infoInversion = infoInversionDAO
                .findById(idInfoInversion)
                .get();
        if (infoInversion == null) {
            throw new RuntimeException("La información no existe");
        }

        // Cambiar el atributo disponible a false
        infoInversion.setDisponible(false);

        // Guardar el proyecto actualizado en la base de datos
        try {

            infoInversionDAO.save(infoInversion);

        } catch (RuntimeException e) {

            throw new RuntimeException("Error al eliminar la información de inversión");

        }
        return "Información eliminada correctamente";
    }

    public List<InfoInversionDTO> buscarInfoInversionesPorProyecto(UUID idProyecto) {
        List<InfoInversion> lista = infoInversionDAO.findByIdProyecto(idProyecto);

        return lista.stream().map(this::convertirADTO).collect(Collectors.toList());
    }

    public String agregarInfoInversion(InfoInversionDTO infoInversionDTO) {

        infoInversionDTO.setDisponible(true);
        InfoInversion infoInversion = this.convertirAInfoInversion(infoInversionDTO);
        try {
            System.out.println(infoInversion);
            System.out.println("Guardando info");
            infoInversionDAO.save(infoInversion);
            System.out.println("info guardada");

        } catch (RuntimeException e) {

            throw new RuntimeException("Error al guardar la información de inversión");

        }
        return "Información asignada correctamente";
    }
}
