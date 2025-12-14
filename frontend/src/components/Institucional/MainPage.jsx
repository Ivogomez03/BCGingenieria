import '../Estilos/MainPage.css';
export const MainPage = () => {

    return (
        <div className="main-page-container">
            <header className="main-page-header">
                <div className="main-page-header-container">
                    <nav>
                        <img src="../logoNuevo2.png" className="imagen-logo" alt="Logo BG Ingeniería" />
                        <ul>
                            <li><a href="#nosotros">Nosotros</a></li>
                            <li><a href="#servicios">Servicios</a></li>
                            <li><a href="#saneamiento">Saneamiento</a></li>
                            <li><a href="#renovables">Energía</a></li>

                            <li><a href="#contacto" className="btn-contacto">Contactanos</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="main-page-main">
                <section className='main-page-seccion-principal'>
                    <img src="../logo-seccion-principal-2.png" className="imagen-logo" alt="Logo BG Ingeniería" />
                    <span className="slogan-logo-seccion-principal">Servicios de ingeniería, obra civil y consultoría ambiental</span>
                </section>
                <section className="main-page-seccion-1">
                    <div className="content">
                        <h2>¿Quiénes somos?</h2>
                        <div className='quienes-somos-container'>
                            <div>
                                <h3>Nuestra empresa</h3>
                                <p>
                                    BG Ingeniería brinda <span className="texto-destacado">soluciones integrales</span> de ingeniería en
                                    <span className="texto-destacado"> saneamiento, ambiente y energía renovable</span>,
                                    combinando conocimiento técnico y del territorio para ofrecer
                                    <span className="texto-destacado">respuestas eficientes, sostenibles y confiables</span>
                                    a empresas, organizaciones, municipios y comunidades.

                                </p>
                            </div>
                            <div>
                                <h3>Misión</h3>
                                <p>
                                    Ofrecer soluciones de ingeniería y consultoría ambiental que generen
                                    <span className="texto-destacado"> valor real a nuestros clientes</span>,
                                    promoviendo la eficiencia, la
                                    <span className="texto-destacado"> protección del ambiente</span> y la
                                    <span className="texto-destacado"> mejora de la calidad de vida </span>
                                    en cada proyecto.
                                </p>
                            </div>
                            <div>
                                <h3>Visión</h3>
                                <p>
                                    Ser reconocidos como <span className="texto-destacado">referentes en la región</span> por nuestra capacidad de
                                    entregar <span className="texto-destacado">proyectos integrales</span>, técnicamente sólidos,
                                    ambientalmente responsables e innovadores, contribuyendo a una transición hacia modelos de
                                    <span className="texto-destacado"> desarrollo sostenible</span>.
                                </p>
                            </div>
                            <div>
                                <h3>Valores</h3>
                                <ul>
                                    <li>Compromiso con la sostenibilidad ambiental.</li>
                                    <li>Capacidad técnica.</li>
                                    <li>Transparencia e integridad.</li>
                                    <li>Orientación al cliente y adaptabilidad.</li>
                                    <li>Innovación y mejora continua.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="main-page-seccion-2">
                    <div className="container">
                        <h2>Nuestra Propuesta</h2>
                        <p className="lead">Combinamos ingeniería, obra y consultoría técnica para acompañar a industrias, organizaciones y municipios en sus desafíos de infraestructura y sustentabilidad.</p>

                        <div className="features-grid">
                            <div className="feature-card">
                                <h3>Ingeniería</h3>
                                <p>Diseño y planificación técnica de alto nivel.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Obra</h3>
                                <p>Ejecución precisa de infraestructura esencial.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Consultoría</h3>
                                <p>Asesoramiento experto para toma de decisiones.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="main-page-seccion-3">
                    <div className="container">
                        <h2>¿Qué Hacemos?</h2>
                        <ul className="service-list">
                            <li>Planificación y ejecución de obras civiles e industriales.</li>
                            <li>Diseño de plantas de tratamiento compactas.</li>
                            <li>Desarrollo de estudios ambientales e hidrológicos.</li>
                            <li>Comercialización de sistemas de almacenamiento en PRFV y Acero Inoxidable.</li>
                        </ul>
                    </div>
                </section>

                <section className="main-page-seccion-4">
                    <div className="container">
                        <div className="text-content">
                            <h2>Saneamiento y Obras Hidráulicas</h2>
                            <p>Desarrollamos y ejecutamos obras que mejoran la calidad de vida y protegen el ambiente.</p>
                            <h3>Nuestros proyectos incluyen:</h3>
                            <ul>
                                <li>Redes y ampliaciones de saneamiento.</li>
                                <li>Estaciones de bombeo.</li>
                                <li>Obras de conducción.</li>
                                <li>Sistemas de tratamiento.</li>
                                <li>Soluciones hidráulicas complementarias.</li>
                            </ul>
                        </div>
                        <div className="image-content">
                            <img src="/ruta-imagen-saneamiento.jpg" alt="Obras de saneamiento BG Ingeniería" />
                        </div>
                    </div>
                </section>

                <section className="main-page-seccion-5">
                    <div className="text-content">
                        <h2>Energías Renovables</h2>
                        <p>Trabajamos para una matriz energética más limpia, confiable y eficiente. Reducimos costos operativos mediante:</p>
                    </div>
                </section>

                <section className="main-page-seccion-6">
                    <div className="container">
                        <h2>Trabajemos Juntos</h2>
                        <p>Seguimos trabajando para acompañar a municipios e industrias en el desarrollo de infraestructura esencial.</p>
                    </div>
                </section>
            </main>

            <footer className="main-page-footer">
                <div className="container">
                    <p>&copy; 2024 BG Ingeniería. Todos los derechos reservados.</p>
                    <div className="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};