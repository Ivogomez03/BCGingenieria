package com.example.backend.Services.Implementacion;

import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.backend.DTO.UsuarioGeneralDTO;
import com.example.backend.Exceptions.ValidationException;
import com.example.backend.Models.UsuarioGeneral;
import com.example.backend.Repository.UsuarioGeneralDAO;
import com.example.backend.Services.Interface.UsuarioGeneralI;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsuarioGeneralServicio implements UsuarioGeneralI {

    private final UsuarioGeneralDAO usuarioGeneralDAO;
    private static final Pattern PASSWORD_PATTERN = Pattern.compile("^(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%&*]).{8,16}$");

    @Override
    public String validarContrasena(String contra) {
        if (!PASSWORD_PATTERN.matcher(contra).matches()) {
            return "La contraseña debe tener al menos de 8 caracteres, un maximo de 16 caracteres, al menos un número, una mayúscula y un caracter especial.";
        }
        return "Contraseña valida";
    }

    @Override
    public UsuarioGeneral buscarUsuarioGeneral(String nombreUsuario) {
        return usuarioGeneralDAO.findByNombreUsuarioAndHabilitadoTrue(nombreUsuario).orElse(null);

    }

    @Override
    public List<UsuarioGeneralDTO> buscarUsuariosGeneralesPorApellido(String apellido) {

        List<UsuarioGeneral> usuariosGenerales;

        // Si hay apellido
        if (apellido != null && !apellido.isEmpty()) {
            usuariosGenerales = usuarioGeneralDAO.findByApellidoAndHabilitadoTrue(apellido);
        } else {
            throw new IllegalArgumentException("Debe proporcionar al menos un criterio de búsqueda.");
        }

        // Si no se encuentran bedeles, lanza una excepción
        if (usuariosGenerales.isEmpty()) {
            throw new IllegalArgumentException("No se encontraron usuarios con el apellido proporcionados.");
        }

        // Convierte la lista de Bedel a BedelDTO
        return usuariosGenerales.stream()
                .map(this::convertirAUsuarioGeneralDTO)
                .collect(Collectors.toList());
    }

    @Override
    public UsuarioGeneralDTO convertirAUsuarioGeneralDTO(UsuarioGeneral usuarioGeneral) {
        UsuarioGeneralDTO dto = new UsuarioGeneralDTO();
        dto.setNombre(usuarioGeneral.getNombre());
        dto.setApellido(usuarioGeneral.getApellido());
        dto.setContrasena(usuarioGeneral.getContrasena());
        dto.setDireccion(usuarioGeneral.getDireccion());
        dto.setDni(usuarioGeneral.getDni());
        dto.setNombreUsuario(usuarioGeneral.getNombreUsuario());
        dto.setEsCliente(usuarioGeneral.isEsCliente());
        dto.setEdad(usuarioGeneral.getEdad());
        dto.setEmail(usuarioGeneral.getEmail());
        dto.setLocalidad(usuarioGeneral.getLocalidad());
        return dto;
    }

    @Override
    public String modificarUsuarioGeneral(UsuarioGeneralDTO usuarioGeneralDTO) {

        String contraValida = this.validarContrasena(usuarioGeneralDTO.getContrasena());

        if (contraValida.equals("Contraseña valida")) {
            // datos nulos o caracteres maximos se valida en front
            UsuarioGeneral usuarioGeneral = usuarioGeneralDAO
                    .findByNombreUsuarioAndHabilitadoTrue(usuarioGeneralDTO.getNombreUsuario())
                    .get();
            if (usuarioGeneral == null) {
                throw new RuntimeException("El usuario no existe, verificar datos ingresados");
            } else {
                usuarioGeneral.setNombre(usuarioGeneralDTO.getNombre());
                usuarioGeneral.setApellido(usuarioGeneralDTO.getApellido());
                usuarioGeneral.setContrasena(usuarioGeneralDTO.getContrasena());
                usuarioGeneral.setDireccion(usuarioGeneralDTO.getDireccion());
                usuarioGeneral.setDni(usuarioGeneralDTO.getDni());
                usuarioGeneral.setNombreUsuario(usuarioGeneralDTO.getNombreUsuario());
                usuarioGeneral.setEsCliente(usuarioGeneralDTO.isEsCliente());
                usuarioGeneral.setEdad(usuarioGeneralDTO.getEdad());
                usuarioGeneral.setEmail(usuarioGeneralDTO.getEmail());
                usuarioGeneral.setLocalidad(usuarioGeneralDTO.getLocalidad());

                // Guardar los cambios en la base de datos
                usuarioGeneralDAO.save(usuarioGeneral);

                // Convertir el usuarioGeneral actualizado a DTO y devolverlo
                return "Usuario ha sido modificado correctamente";
            }
        } else {
            throw new ValidationException(contraValida);
        }

    }

    @Override
    public void eliminarUsuarioGeneral(UsuarioGeneralDTO usuarioGeneralDTO) {
        // Buscar el Bedel en la base de datos;
        UsuarioGeneral usuarioGeneral = usuarioGeneralDAO
                .findByNombreUsuarioAndHabilitadoTrue(usuarioGeneralDTO.getNombreUsuario())
                .get();
        if (usuarioGeneral == null) {
            throw new RuntimeException("El usuario general no existe");
        }

        // Cambiar el atributo habilitado a false
        usuarioGeneral.setHabilitado(false);

        // Guardar el usuario actualizado en la base de datos
        usuarioGeneralDAO.save(usuarioGeneral);
    }
}
