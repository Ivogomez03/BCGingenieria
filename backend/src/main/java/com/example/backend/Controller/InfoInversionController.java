package com.example.backend.Controller;

import java.security.Principal;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.DTO.InfoInversionDTO;
import com.example.backend.Models.BCG;
import com.example.backend.Models.Role;
import com.example.backend.Services.Implementacion.BCGServicio;
import com.example.backend.Services.Implementacion.InfoInversionesServicio;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class InfoInversionController {

    private final InfoInversionesServicio infoInversionesServicio;
    private final BCGServicio bcgServicio;

    @DeleteMapping("/infoInversion/eliminarInfoInversion")
    public ResponseEntity<?> eliminarInfoInversion(@RequestBody InfoInversionDTO infoInversionDTO,
            Principal principal) {
        String username = principal.getName();

        BCG bcg = bcgServicio.buscarBCG(username);

        if (!bcg.getRole().equals(Role.BCG)) {

            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("No tienes permisos para eliminar información de inversiones.");

        }
        try {

            String salidaEliminar = infoInversionesServicio
                    .eliminarInfoInversion(infoInversionDTO.getIdInfoInversion());

            return ResponseEntity.ok(salidaEliminar);

        } catch (RuntimeException e) {

            return ResponseEntity.badRequest().body("Error al eliminar la información de inversiones" + e.getMessage());

        }
    }

    @PutMapping("/infoInversion/modificarInfoInversion")
    public ResponseEntity<?> modificarInfoInversion(@RequestBody InfoInversionDTO infoInversionDTO,
            Principal principal) {
        String username = principal.getName();

        BCG bcg = bcgServicio.buscarBCG(username);

        if (!bcg.getRole().equals(Role.BCG)) {

            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("No tienes permisos para modificar información de inversiones.");

        }
        try {

            String salidaModificar = infoInversionesServicio.modificarInfoInversion(infoInversionDTO);

            return ResponseEntity.ok(salidaModificar);

        } catch (RuntimeException e) {

            return ResponseEntity.badRequest().body("Error al obtener la lista de proyectos " + e.getMessage());

        }
    }

    @PostMapping("/proyecto/agregarInfoInversiones")
    public ResponseEntity<String> agregarInfoInversiones(@RequestBody InfoInversionDTO infoInversionDTO,
            Principal principal) {
        String username = principal.getName();

        BCG bcg = bcgServicio.buscarBCG(username);

        if (!bcg.getRole().equals(Role.BCG)) {

            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("No tienes permisos para agregar información de inversiones.");

        }
        try {

            String salidaModificar = infoInversionesServicio.agregarInfoInversion(infoInversionDTO);

            return ResponseEntity.ok(salidaModificar);

        } catch (RuntimeException e) {

            return ResponseEntity.badRequest().body("Error al modificar el proyecto " + e.getMessage());

        }

    }
}
