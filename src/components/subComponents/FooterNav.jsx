import style from '../../styles/components/subComponents/FooterNav.module.css';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import A from '../A';

export default function FooterNav(){

    const { openDonationModal } = useContext(AppContext)

    return(
        <section id={style.footerNav}>
            <div className="container">
                <div className={style.wrapper}>
                    <div></div>
                    <h3>Mapa do site</h3>
                    <nav>
                        <ul>
                            <li>
                                <A >
                                    Home
                                </A>
                                <div></div>
                            </li>
                            <li>
                                <A page='login'>
                                    Entrar
                                </A>
                                <div></div>
                            </li>
                            <li>
                                <A to='About'>
                                    Sobre
                                </A>
                                <div></div>
                            </li>
                            <li>
                                <A to='Contact'>
                                    Contato
                                </A>
                                <div></div>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={(e)=>{openDonationModal(e)}}
                                >
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