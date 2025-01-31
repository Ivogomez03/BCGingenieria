package com.example.backend.Controller;

import java.security.Principal;
import java.util.List;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.DTO.ProyectoDTO;
import com.example.backend.Models.BCG;
import com.example.backend.Models.Role;
import com.example.backend.Services.Implementacion.BCGServicio;
import com.example.backend.Services.Implementacion.ProyectoServicio;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ProyectoController {

    private ProyectoServicio proyectoServicio;
    private BCGServicio bcgServicio;

    @PostMapping("/proyecto/crear")
    public ResponseEntity<String> crearProyecto(@RequestBody ProyectoDTO proyectoDTO, Principal principal) {

        String username = principal.getName();

        BCG bcg = bcgServicio.buscarBCG(username);

        if (!bcg.getRole().equals(Role.BCG)) {

            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No tienes permisos para crear proyectos.");

        }

        try {

            String mensajeSalida = proyectoServicio.crearProyecto(proyectoDTO);

            return ResponseEntity.ok(mensajeSalida);

        } catch (DataIntegrityViolationException e) {

            return ResponseEntity.badRequest().body("Error al crear el proyecto " + e.getMessage());

        }
    }

    @GetMapping("/proyecto/buscarProyectoPorNombre")
    public ResponseEntity<?> buscarProyecto(@RequestParam String nombreProyecto) {

        try {

            ProyectoDTO proyectoBuscado = proyectoServicio.buscarProyectoDTO(nombreProyecto);

            return ResponseEntity.ok(proyectoBuscado);

        } catch (RuntimeException e) {

            return ResponseEntity.badRequest().body(e.getMessage());

        }
    }

    @DeleteMapping("/proyecto/eliminarProyecto")
    public ResponseEntity<String> eliminarProyecto(@RequestParam String nombreProyecto, Principal principal) {
        String username = principal.getName();

        BCG bcg = bcgServicio.buscarBCG(username);

        if (!bcg.getRole().equals(Role.BCG)) {

            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No tienes permisos para eliminar proyectos.");

        }

        try {

            proyectoServicio.eliminarProyecto(nombreProyecto);

            return ResponseEntity.ok("El proyecto ha sido eliminado correctamente.");

        } catch (RuntimeException e) {

            return ResponseEntity.badRequest().body(e.getMessage());

        }
    }

    @PutMapping("/proyecto/modificarProyecto")
    public ResponseEntity<String> modificarProyecto(@RequestBody ProyectoDTO proyectoDTO, Principal principal) {

        try {
            String username = principal.getName();

            BCG bcg = bcgServicio.buscarBCG(username);

            if (!bcg.getRole().equals(Role.BCG)) {

                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No tienes permisos para modificar proyectos.");

            }

            String salidaModificar = proyectoServicio.modificarProyecto(proyectoDTO);

            return ResponseEntity.ok(salidaModificar);

        } catch (RuntimeException e) {

            return ResponseEntity.badRequest().body("Error al modificar el proyecto " + e.getMessage());

        }

    }

    @GetMapping("/proyecto/obtenerTodosLosProyectos")
    public ResponseEntity<?> obtenerTodosLosProyectos() {
        try {

            List<ProyectoDTO> listaDeProyectos = proyectoServicio.obtenerTodosLosProyectos();

            return ResponseEntity.ok(listaDeProyectos);

        } catch (RuntimeException e) {

            return ResponseEntity.badRequest().body("Error al obtener la lista de proyectos " + e.getMessage());

        }
    }
}
