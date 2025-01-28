package com.example.backend.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.DTO.ProyectoDTO;
import com.example.backend.Exceptions.ValidationException;
import com.example.backend.Services.Implementacion.ProyectoServicio;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ProyectoController {

    private ProyectoServicio proyectoServicio;

    @PostMapping("/proyecto/crear")
    public ResponseEntity<String> crearProyecto(@RequestBody ProyectoDTO proyectoDTO) {
        try {

            String mensajeSalida = proyectoServicio.crearProyecto(proyectoDTO);
            return ResponseEntity.ok(mensajeSalida);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body("Error al modificar el usuario " + e.getMessage());
        }
    }

    @GetMapping("/proyecto/buscarProyectoPorNombre")
    public ResponseEntity<?> buscarProyecto(@RequestParam String nombreProyecto) {
        try {
            ProyectoDTO proyectoBuscado = proyectoServicio.buscarProyecto(nombreProyecto);
            return ResponseEntity.ok(proyectoBuscado);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/proyecto/eliminarProyecto")
    public ResponseEntity<String> eliminarUsuarioGeneral(@RequestParam String nombreProyecto) {
        try {
            proyectoServicio.eliminarProyecto(nombreProyecto);

            return ResponseEntity.ok("El proyecto ha sido eliminado correctamente.");
        } catch (IllegalArgumentException e) {

            return ResponseEntity.badRequest().body(e.getMessage());

        }
    }

    @PutMapping("/proyecto/modificarProyecto")
    public ResponseEntity<String> modificarProyecto(@RequestBody ProyectoDTO proyectoDTO) {
        try {
            String salidaModificar = proyectoServicio.modificarProyecto(proyectoDTO);
            return ResponseEntity.ok(salidaModificar);
        } catch (ValidationException e) {
            return ResponseEntity.badRequest().body("Error al modificar el usuario " + e.getMessage());
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
