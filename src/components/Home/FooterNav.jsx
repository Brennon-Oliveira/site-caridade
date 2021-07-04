import style from '../../styles/components/Home/FooterNav.module.css';

export default function FooterNav(){

    return(
        <section id={style.footerNav}>
            <div className="container">
                <div className={style.wrapper}>
                    <div></div>
                    <h3>Mapa do site</h3>
                    <nav>
                        <ul>
                            <li>
                                <a href="">
                                    Home
                                </a>
                                <div></div>
                            </li>
                            <li>
                                <a href="">
                                    Entrar
                                </a>
                                <div></div>
                            </li>
                            <li>
                                <a href="">
                                    Sobre
                                </a>
                                <div></div>
                            </li>
                            <li>
                                <a href="">
                                    Contato
                                </a>
                                <div></div>
                            </li>
                            <li>
                                <a href="">
                                    Doar
                                </a>
                                <div></div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={style.wrapper}>
                    <div></div>
                    <h3>Redes sociais</h3>
                    <nav>
                        <ul>
                            <li>
                                <a href="">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={style.wrapper}>
                    <div></div>
                    <h3>Endereço</h3>
                    <div>
                        <p>Avenida Walter Lopes da Cruz</p>
                        <p>Santana/AP</p>
                        <p>CEP 68927-420</p>
                    </div>
                </div>
            </div>
        </section>
    )
}