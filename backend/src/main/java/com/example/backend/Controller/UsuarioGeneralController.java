package com.example.backend.Controller;

import java.security.Principal;
import java.util.List;
import java.util.Collections;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.DTO.UsuarioGeneralDTO;
import com.example.backend.Exceptions.ValidationException;
import com.example.backend.Models.Administrador;
import com.example.backend.Services.Implementacion.AdministradorServicio;
import com.example.backend.Services.Implementacion.UsuarioGeneralServicio;
import com.example.backend.Models.Role;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UsuarioGeneralController {

    private final UsuarioGeneralServicio usuarioGeneralServicio;

    private final AdministradorServicio administradorServicio;

    @DeleteMapping("/admin/eliminarUsuarioGeneral")
    public ResponseEntity<String> eliminarUsuarioGeneral(@RequestBody UsuarioGeneralDTO usuarioGeneralDTO,
            Principal principal) {
        try {

            String username = principal.getName();

            Administrador admin = administradorServicio.buscarAdministrador(username);

            if (!admin.getRole().equals(Role.ADMIN)) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No tienes permisos para eliminar usuarios.");
            }

            usuarioGeneralServicio.eliminarUsuarioGeneral(usuarioGeneralDTO);

            return ResponseEntity.ok("El usuario ha sido eliminado correctamente.");
        } catch (IllegalArgumentException e) {

            return ResponseEntity.badRequest().body(e.getMessage());

        }
    }

    @GetMapping("/admin/buscarUsuarios")
    public ResponseEntity<List<UsuarioGeneralDTO>> buscarPorApellido(@RequestParam(required = false) String apellido,
            Principal principal) {
        try {
            System.out.println("Buscar por apellido iniciado");
            System.out.println("Principal: " + principal.getName());

            String username = principal.getName();
            System.out.println("El username es: " + username);

            Administrador admin = administradorServicio.buscarAdministrador(username);
            System.out.println("El administrador es: " + admin);
            if (!admin.getRole().equals(Role.ADMIN)) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Collections.emptyList());
            }

            // Llama al servicio para buscar los usuarios generales
            List<UsuarioGeneralDTO> resultado = usuarioGeneralServicio.buscarUsuariosGeneralesPorApellido(apellido);

            return ResponseEntity.ok(resultado); // Devuelve 200 OK con la lista de resultados
        } catch (IllegalArgumentException e) {
            // Devuelve 400 Bad Request con una lista vacía si ocurre una excepción
            return ResponseEntity.badRequest().body(Collections.emptyList());
        }
    }

    @PutMapping("/admin/modificarUsuario")
    public ResponseEntity<String> modificarBedel(@RequestBody UsuarioGeneralDTO usuarioModificado,
            Principal principal) {
        try {
            String username = principal.getName();

            Administrador admin = administradorServicio.buscarAdministrador(username);

            if (!admin.getRole().equals(Role.ADMIN)) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No tienes permisos para eliminar usuarios.");
            }

            String salidaModificar = usuarioGeneralServicio.modificarUsuarioGeneral(usuarioModificado);
            return ResponseEntity.ok(salidaModificar);
        } catch (ValidationException e) {
            return ResponseEntity.badRequest().body("Error al modificar el usuario " + e.getMessage());
        }
    }

}
