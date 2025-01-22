package com.example.backend.Services.Interface;

import java.util.List;

import com.example.backend.DTO.UsuarioGeneralDTO;
import com.example.backend.Models.UsuarioGeneral;

public interface UsuarioGeneralI {
    public void eliminarUsuarioGeneral(String nombreUsuario);

    public String modificarUsuarioGeneral(UsuarioGeneralDTO usuarioGeneralDTO);

    public UsuarioGeneralDTO convertirAUsuarioGeneralDTO(UsuarioGeneral usuarioGeneral);

    public List<UsuarioGeneralDTO> buscarUsuariosGeneralesPorApellido(String apellido);

    public String validarContrasena(String contra);

    public UsuarioGeneral buscarUsuarioGeneral(String nombreUsuario);
}
