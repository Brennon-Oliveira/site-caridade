import { useEffect, useContext } from "react";
import styles from "./../styles/components/Header.module.css";
import { Element } from "react-scroll";
import { PROJECT_NAME } from "../consts";
import { AppContext } from "../contexts/AppContext";
import A from "./A";

export default function Header(props) {
    const { isAuth } = useContext(AppContext);

    function toggleMenu(e) {
        if (e.type === "touchstart") e.preventDefault();
        var menu = document.querySelector("#" + styles.header + " nav");
        menu.classList.toggle("active");
    }

    useEffect(() => {
        var btn = document.querySelector("#" + styles.header + " button");
        btn.addEventListener("touchstart", (e) => {
            toggleMenu(e);
        });
        btn.addEventListener("click", (e) => {
            toggleMenu(e);
        });
    }, []);

    const { openDonationModal, logout } = useContext(AppContext);

    return (
        <header id={styles.header} className={props.type}>
            <Element name="Home" className="container">
                <h1>
                    <A href="#">{PROJECT_NAME}</A>
                    <div></div>
                </h1>
                <nav>
                    <button>
                        <span></span>
                    </button>
                    <ul>
                        <li>
                            <A>Home</A>
                        </li>
                        <li>
                            <A page="posts">Posts</A>
                        </li>
                        <li>
                            <A to="Contact">Contato</A>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    openDonationModal(e);
                                }}
                                className="red"
                            >
                                Doar
                            </a>
                        </li>
                        <li>
                            {!isAuth ? (
                                <A page="login" className="blue">
                                    Entrar
                                </A>
                            ) : (
                                <A page="user" className="blue">
                                    Seu perfil
                                </A>
                            )}
                        </li>
                        {isAuth && (
                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        logout();
                                    }}
                                >
                                    Sair
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
            </Element>
        </header>
    );
}
