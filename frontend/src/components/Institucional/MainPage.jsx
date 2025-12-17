import '../Estilos/MainPage.css';
import PublicIcon from '@mui/icons-material/Public';
import FactoryIcon from '@mui/icons-material/Factory';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export const MainPage = () => {

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="main-page-container">
            <header className="main-page-header">
                <div className="main-page-header-container">
                    <nav>
                        <img src="../logoNuevo2.png" className="imagen-logo" alt="Logo BG Ingeniería" onClick={(e) => handleScroll(e, 'main-page-seccion-principal')} />
                        <ul>
                            <li><a onClick={(e) => handleScroll(e, 'main-page-seccion-quienes-somos')}>Nosotros</a></li>
                            <li><a onClick={(e) => handleScroll(e, 'main-page-seccion-que-hacemos')}>Qué hacemos</a></li>
                            <li><a onClick={(e) => handleScroll(e, 'main-page-seccion-como-hacemos')}>Como lo hacemos</a></li>
                            <li><a onClick={(e) => handleScroll(e, 'main-page-seccion-mercados')}>Clientes</a></li>
                            <li><a onClick={(e) => handleScroll(e, 'main-page-nuestros-proyectos')}>Nuestros proyectos</a></li>
                            <li><a style={{ color: 'var(--accent-color)' }} onClick={(e) => handleScroll(e, 'contacto')}>Contactanos</a></li>

                        </ul>
                    </nav>
                </div>
            </header>
            <main className="main-page-main">
                <section id='main-page-seccion-principal' className='main-page-seccion-principal'>
                    <img src="../logo-seccion-principal-2.png" className="imagen-logo" alt="Logo BG Ingeniería" />
                    <span className="slogan-logo-seccion-principal">Servicios de ingeniería, obra civil y consultoría ambiental</span>
                </section>
                <section id='main-page-seccion-quienes-somos' className="main-page-seccion-1">
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

                <section id='main-page-seccion-que-hacemos' className="main-page-seccion-2">

                    <div className="container">
                        <h2 className="section-title">Qué hacemos</h2>

                        <div className="areas-grid">
                            {/* Saneamiento */}
                            <article className="area-card">
                                <h3>Obras de saneamiento y efluentes industriales</h3>
                                <ul>
                                    <li>Redes de agua potable, cloacas y desagües pluviales</li>
                                    <li>Plantas compactas de tratamiento y ósmosis inversa</li>
                                    <li>Tratamiento de efluentes y residuos industriales</li>
                                    <li>Costeo y licitaciones de obras públicas y privadas</li>
                                </ul>

                            </article>

                            {/* Gestión ambiental */}
                            <article className="area-card">
                                <h3>Gestión ambiental y recursos hídricos</h3>
                                <ul>
                                    <li>Estudios de impacto ambiental e hídrico</li>
                                    <li>Planes de gestión ambiental</li>
                                    <li>Normas ISO 14000 y certificaciones sostenibles</li>
                                    <li>Huella de carbono y carbono neutralidad</li>
                                </ul>

                            </article>

                            {/* Energías renovables */}
                            <article className="area-card">
                                <h3>Energías renovables</h3>
                                <ul>
                                    <li>Sistemas on grid, off grid e híbridos</li>
                                    <li>Prosumidores, grandes demandas y generadores</li>
                                    <li>Presentaciones ante EPE y Cooperativas Eléctricas</li>
                                    <li>Diseño de tableros eléctricos de potencia y automatismo</li>
                                </ul>

                            </article>
                        </div>
                    </div>
                </section>

                <section id='main-page-seccion-mercados' className="main-page-seccion-3">
                    <div className="container">
                        <h2 className="section-title">Mercados</h2>

                        <div className="mercados-grid">
                            <div className="mercado-item">
                                <PublicIcon className="mercado-icon" />
                                Municipios y organismos públicos
                            </div>

                            <div className="mercado-item">
                                <FactoryIcon className="mercado-icon" />
                                Industrias y empresas de servicios

                            </div>
                            <div className="mercado-item">
                                <ApartmentIcon className="mercado-icon" />
                                Cooperativas y desarrollos rurales y urbanos


                            </div>
                            <div className="mercado-item">
                                <SolarPowerIcon className="mercado-icon" />
                                Proyectos de energía renovable, saneamiento e infraestructura
                            </div>
                        </div>
                    </div>
                </section>

                <section id='main-page-seccion-como-hacemos' className="main-page-seccion-4">
                    <div className="container">
                        <h2 className="section-title">CÓMO LO HACEMOS</h2>

                        <div className="intro-block">
                            <p>
                                Adoptamos un enfoque integral: desde el diagnóstico hasta la puesta en marcha,
                                abarcando diseño, ingeniería, ejecución y seguimiento. Garantizamos un servicio
                                completo <span className="texto-destacado">“llave en mano”</span>.
                            </p>
                        </div>

                        <div className="pilares-grid">

                            <div className="pilar-card">
                                <div className="icon-box">
                                    <i className="fa-solid fa-clipboard-check"></i> </div>
                                <h3>Garantía de entrega</h3>
                                <p>Nos comprometemos a cumplir con los plazos y estándares. Cada proyecto es ejecutado con rigor, transparencia y control.</p>
                            </div>

                            <div className="pilar-card">
                                <div className="icon-box">
                                    <i className="fa-solid fa-leaf"></i>
                                </div>
                                <h3>Sustentabilidad</h3>
                                <p>Eficiencia energética, uso responsable de recursos y minimización del impacto ambiental desde la concepción del proyecto.</p>
                            </div>

                            <div className="pilar-card">
                                <div className="icon-box">
                                    <i className="fa-solid fa-microchip"></i>
                                </div>
                                <h3>Innovación</h3>
                                <p>Tecnologías modernas, materiales como PRFV y acero inoxidable, y metodologías avanzadas de modelación.</p>
                            </div>

                            <div className="pilar-card">
                                <div className="icon-box">
                                    <i className="fa-solid fa-solar-panel"></i>
                                </div>
                                <h3>Transición energética</h3>
                                <p>Promovemos energías renovables y sistemas eficientes para reducir la huella ambiental hacia un modelo sostenible.</p>
                            </div>

                        </div>
                    </div>
                </section>

                <section id='main-page-nuestros-proyectos' className="main-page-seccion-5">
                    <div className="container">
                        <h2 className="section-title">Nuestros proyectos</h2>

                        <div className="proyectos-grid">

                            <div className="columna-proyecto">
                                <div className="cat-header">
                                    <i className="fa-solid fa-faucet-drip"></i>
                                    <h3>Obras de Saneamiento</h3>
                                </div>
                                <div className="lista-obras">
                                    <div className="obra-item">
                                        <h4>Planta Tratamiento Agua Potable</h4>
                                        <p className="detalle">Sistema Biológico Hierro/Manganeso. Montaje civil y electromecánico.</p>
                                        <span className="ubicacion"><i className="fa-solid fa-location-dot"></i> Monte Vera (BioCis IDEAR UNR)</span>
                                    </div>
                                    <div className="obra-item">
                                        <h4>Red de Distribución y Optimización</h4>
                                        <p className="detalle">Dirección y ejecución de obra.</p>
                                        <span className="ubicacion"><i className="fa-solid fa-location-dot"></i> Santa Clara de Saguier</span>
                                    </div>
                                    <div className="obra-item">
                                        <h4>Planta de Cloración PLC ASSA</h4>
                                        <p className="detalle">Dirección y ejecución de obra.</p>
                                        <span className="ubicacion"><i className="fa-solid fa-location-dot"></i> Gálvez</span>
                                    </div>
                                    <div className="obra-item">
                                        <h4>Red de Agua Potable</h4>
                                        <p className="detalle">Captación, impulsión, tratamiento y distribución.</p>
                                        <span className="ubicacion"><i className="fa-solid fa-location-dot"></i> Colonia San José</span>
                                    </div>
                                    <div className="obra-item">
                                        <h4>Extensión Red Barrio Jesuitas</h4>
                                        <p className="detalle">Extensión de la red de agua potable.</p>
                                        <span className="ubicacion"><i className="fa-solid fa-location-dot"></i> Ciudad de Santa Fe</span>
                                    </div>
                                </div>
                            </div>

                            <div className="columna-proyecto">
                                <div className="cat-header">
                                    <i className="fa-solid fa-seedling"></i>
                                    <h3>Gestión Ambiental</h3>
                                </div>
                                <ul className="lista-ambiental">
                                    <li>Estudios de Impacto Ambiental (urbanizaciones, loteos e industrias).</li>
                                    <li>Estudios hídricos y Planes de Gestión.</li>
                                    <li>Sistemas ISO 14001 y Certificaciones Sostenibles.</li>
                                    <li>Huella de Carbono y Carbono Neutralidad.</li>
                                    <li>Diseño de Plantas de Reciclado y Rellenos Sanitarios.</li>
                                    <li>Recuperación de áreas degradadas.</li>
                                </ul>
                            </div>

                            <div className="columna-proyecto">
                                <div className="cat-header">
                                    <i className="fa-solid fa-solar-panel"></i>
                                    <h3>Energías Renovables</h3>
                                </div>
                                <div className="lista-energia">

                                    <div className="energia-card">
                                        <div className="energia-tag">ETAPA II</div>
                                        <h4>Comunidad Solar</h4>
                                        <p>Dirección técnica y planificación modelo económico asociativo.</p>
                                        <span className="ubicacion">María Teresa</span>
                                    </div>

                                    <div className="energia-card highlight">
                                        <div className="metrics">
                                            <span className="big-number">7 KW</span>
                                            <span className="sub-metric">Colaborativo</span>
                                        </div>
                                        <h4>Sistema fotovoltaico colaborativo</h4>
                                        <p>3 vecinos conectados al sistema.</p>
                                        <span className="ubicacion">Rafaela</span>
                                    </div>

                                    <div className="energia-card highlight">
                                        <div className="metrics">
                                            <span className="big-number">20 KW</span>
                                            <span className="sub-metric">80% Ahorro</span>
                                        </div>
                                        <h4>Empresa Lazzaroni</h4>
                                        <span className="ubicacion">Ceres</span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section id="contacto" className="main-page-seccion-contacto">
                    <div className="container">
                        <div className="contacto-card">
                            <h2 className="section-title">¿Listo para comenzar?</h2>
                            <p className="contacto-subtitulo">
                                Estamos disponibles para asesorarte en tu próximo proyecto de ingeniería o energía renovable.
                                <br />
                                <strong>Escríbenos ahora para una respuesta rápida.</strong>
                            </p>
                            <a
                                href="https://wa.me/5493424061382?text=Hola,%20quisiera%20asesoramiento%20sobre..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp-gigante"
                            >
                                <WhatsAppIcon style={{ fontSize: 40 }} />
                                <span>Iniciar Chat por WhatsApp</span>
                            </a>

                            <div className="contacto-extra-info">
                                <div className="info-item">
                                    <EmailIcon className="icon-small" />
                                    <span>info@bgingenieria.com.ar</span>
                                </div>
                                <div className="info-item">
                                    <LocationOnIcon className="icon-small" />
                                    <span>Santa Fe Capital</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="main-page-footer">
                <div className="container">
                    <div className="footer-grid">

                        <div className="footer-col brand-col">
                            <img src="./logo-blanco.png" alt="BG Ingenieria" className='footer-logo' />
                            <p>Soluciones integrales de ingeniería, saneamiento y energía renovable. Compromiso con la eficiencia y el medio ambiente.</p>
                        </div>

                        <div className="footer-col links-col">
                            <h3>Navegación</h3>
                            <ul>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Servicios</a></li>
                                <li><a href="#">Proyectos</a></li>
                                <li><a href="#">Nosotros</a></li>
                            </ul>
                        </div>

                        <div className="footer-col contact-col">
                            <h3>Contacto</h3>
                            <ul className="contact-list">
                                <li>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span>Av. Principal 1234, Rafaela, Santa Fe</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-envelope"></i>
                                    <a href="mailto:info@bgingenieria.com.ar">info@bgingenieria.com.ar</a>
                                </li>
                                <li>
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <a href="https://wa.me/5493492000000">+54 9 3492 00-0000</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col social-col">
                            <h3>Síguenos</h3>
                            <div className="social-icons">
                                <a href="#" className="social-link"><LinkedInIcon className='icon-footer' /></a>
                                <a href="#" className="social-link"><InstagramIcon className='icon-footer' /></a>
                                <a href="#" className="social-link"><FacebookIcon className='icon-footer' /></a>
                            </div>
                        </div>

                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2025 BG Ingeniería. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};