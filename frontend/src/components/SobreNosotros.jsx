import './Estilos/SobreNosotros.css'
export const SobreNosotros = ({ sobreNosotrosRef }) => {
    return (
        <section className="sobre-nosotros-seccion" ref={sobreNosotrosRef}>
            <div>
                <h1>Sobre Nosotros</h1>
                <p>En BCG Ingeniería, creemos en el poder de la ingeniería para generar un impacto positivo. Nos especializamos en desarrollar soluciones innovadoras para la sostenibilidad, integrando tecnología y compromiso social en cada proyecto.</p>
                <p>Al identificar la creciente demanda de proyectos renovables comunitarios, creamos <strong>&quot;Comunidades Renovables: Plataforma de gestión de inversiones sostenibles&quot;</strong>. Esta herramienta facilita la conexión entre desarrolladores, inversores y usuarios, optimizando la administración de comunidades solares y simplificando la participación en modelos de inversión sostenible.</p>
                <p>Si eres un desarrollador interesado en colaborar con nosotros, contáctanos a través de nuestro formulario o agenda una reunión con nuestro equipo. Juntos podemos impulsar el futuro de la energía renovable.</p>

            </div>

        </section>
    )
}