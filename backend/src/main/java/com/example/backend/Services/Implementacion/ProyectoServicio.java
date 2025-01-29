package com.example.backend.Services.Implementacion;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import com.example.backend.DTO.ProyectoDTO;
import com.example.backend.Models.Proyecto;
import com.example.backend.Repository.ProyectoDAO;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProyectoServicio {
    private final ProyectoDAO proyectoDAO;

    public String crearProyecto(ProyectoDTO proyectoDTO) {

        if (this.buscarProyecto(proyectoDTO.getNombre()) != null) {
            throw new DataIntegrityViolationException("El nombre del proyecto ya existe");
        }

        Proyecto proyecto = Proyecto.builder()
                .nombre(proyectoDTO.getNombre())
                .descripcion(proyectoDTO.getDescripcion())
                .potencia(proyectoDTO.getPotencia())
                .precioKW(proyectoDTO.getPrecioKW())
                .huellaCarbonoAhorrada(proyectoDTO.getHuellaCarbonoAhorrada())
                .generacionAnual(proyectoDTO.getGeneracionAnual())
                .unidadesDisponibles(proyectoDTO.getUnidadesDisponibles())
                .inversionHechaHastaAhora(proyectoDTO.getInversionHechaHastaAhora())
                .fechaCreacion(proyectoDTO.getFechaCreacion())
                .disponible(true)
                .build();

        System.out.println("Guardando proyecto");

        proyectoDAO.save(proyecto);

        System.out.println("Proyecto guardado");

        return "Proyecto creado exitosamente";

    }

    public void eliminarProyecto(String nombreProyecto) {
        // Buscar el Proyecto en la base de datos;
        Proyecto proyecto = proyectoDAO
                .findByNombre(nombreProyecto)
                .get();
        if (proyecto == null) {
            throw new RuntimeException("El proyecto no existe");
        }

        // Cambiar el atributo disponible a false
        proyecto.setDisponible(false);

        // Guardar el proyecto actualizado en la base de datos
        proyectoDAO.save(proyecto);
    }

    public String modificarProyecto(ProyectoDTO proyectoDTO) {
        Proyecto proyecto = proyectoDAO
                .findByNombre(proyectoDTO.getNombre())
                .get();

        if (proyecto == null) {

            throw new RuntimeException("El usuario no existe, verificar datos ingresados");

        } else {

            proyecto.setNombre(proyectoDTO.getNombre());

            proyecto.setDescripcion(proyectoDTO.getDescripcion());

            proyecto.setPotencia(proyectoDTO.getPotencia());

            proyecto.setPrecioKW(proyectoDTO.getPrecioKW());

            proyecto.setHuellaCarbonoAhorrada(proyectoDTO.getHuellaCarbonoAhorrada());

            proyecto.setGeneracionAnual(proyectoDTO.getGeneracionAnual());

            proyecto.setUnidadesDisponibles(proyectoDTO.getUnidadesDisponibles());

            proyecto.setInversionHechaHastaAhora(proyectoDTO.getInversionHechaHastaAhora());

            proyecto.setFechaCreacion(proyectoDTO.getFechaCreacion());

            proyecto.setDisponible(proyectoDTO.isDisponible());

            System.out.println("Guardando proyecto modificado");

            // Guardar los cambios en la base de datos

            proyectoDAO.save(proyecto);

            System.out.println("Proyecto modificado guardado");

            return "Proyecto ha sido modificado correctamente";
        }
    }

    public List<ProyectoDTO> obtenerTodosLosProyectos() {
        List<Proyecto> proyectos = proyectoDAO.findAll();

        // Si no se encuentran proyectos, lanza una excepción
        if (proyectos.isEmpty()) {
            throw new RuntimeException("No se encontraron proyectos.");
        }

        // Convierte la lista de proyectos a proyectos dto
        return proyectos.stream()
                .map(this::convertirAProyectoDTO)
                .collect(Collectors.toList());
    }

    public Proyecto buscarProyecto(String nombreProyecto) {
        return proyectoDAO.findByNombre(nombreProyecto).orElse(null);
    }

    public ProyectoDTO buscarProyectoDTO(String nombreProyecto) {

        Proyecto proyecto = proyectoDAO.findByNombre(nombreProyecto).orElse(null);

        if (proyecto == null) {

            throw new RuntimeException("El proyecto no ha sido encontrado");

        }
        return this.convertirAProyectoDTO(proyecto);
    }

    public ProyectoDTO convertirAProyectoDTO(Proyecto proyecto) {

        ProyectoDTO dto = new ProyectoDTO();

        dto.setNombre(proyecto.getNombre());

        dto.setDescripcion(proyecto.getDescripcion());

        dto.setPotencia(proyecto.getPotencia());

        dto.setPrecioKW(proyecto.getPrecioKW());

        dto.setHuellaCarbonoAhorrada(proyecto.getHuellaCarbonoAhorrada());

        dto.setGeneracionAnual(proyecto.getGeneracionAnual());

        dto.setUnidadesDisponibles(proyecto.getUnidadesDisponibles());

        dto.setInversionHechaHastaAhora(proyecto.getInversionHechaHastaAhora());

        dto.setFechaCreacion(proyecto.getFechaCreacion());

        dto.setDisponible(proyecto.isDisponible());

        return dto;
    }

}
