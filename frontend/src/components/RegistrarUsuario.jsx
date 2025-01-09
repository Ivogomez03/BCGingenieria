import { useId } from "react"


const CamposRegistroUsuario = [
    {
        nombre: "Nombre",
        tipo: "text"
    },
    {
        nombre: "Apellido",
        tipo: "text"
    },
    {
        nombre: "Dni",
        tipo: "number"
    },
    {
        nombre: "Email",
        tipo: "email"
    },
    {
        nombre: "Direccion",
        tipo: "text"
    },
    {
        nombre: "Localidad",
        tipo: "text"
    },
    {
        nombre: "Edad",
        tipo: "number"
    },
    {
        nombre: "Nombre de usuario",
        tipo: "text"
    },
    {
        nombre: "Contraseña",
        tipo: "password"
    },
    {
        nombre: "Confirmar contraseña",
        tipo: "password"
    },
]
export const RegistrarUsuario = () => {
    return (
        <>
            <div>
                <h1>Registrar Usuario</h1>
            </div>
            <form action="">
                {CamposRegistroUsuario.map((campo, index) => {
                    return (
                        <>

                            <label htmlFor={campo.nombre}>{campo.nombre}</label>
                            <input key={index} type={campo.tipo} className="input-registro-usuario" placeholder={campo.nombre} />
                        </>
                    )
                })}
                <button type="submit"></button>
            </form>
        </>

    )
}