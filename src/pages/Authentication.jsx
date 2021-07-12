import { useState } from "react";
import style from "../styles/components/Authentication.module.css";

export default function Authentication() {
    const [login, setLogin] = useState(true);

    const [emailLogin, setEmailLogin] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordReapeat, setPasswordReapeat] = useState("");

    if (login) {
        return (
            <section id={style.auth}>
                <div className={style.auth}>
                    <h2 className="title">Entrar</h2>
                    <form>
                        <div className={style.wrapper}>
                            <label htmlFor="emaillogin">Email ou login</label>
                            <input
                                type="text"
                                value={emailLogin}
                                onChange={(e) => {
                                    setEmailLogin(e.target.value);
                                }}
                                placeholder="Sua senha ou login"
                                id="emaillogin"
                            />
                        </div>
                        <div className={style.wrapper}>
                            <label htmlFor="email">E-Mail</label>
                            <input
                                type="text"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                placeholder="Ex: joaosilva@gmail.com"
                                id="email"
                            />
                        </div>
                        <div className={style.btn}>
                            <button type="submit">Entrar</button>
                            <button>Ainda não tem uma conta?</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    } else {
        return (
            <section id={style.auth}>
                <div className={style.auth}>
                    <h2 className="title">Cadastrar</h2>
                    <form>
                        <div className={style.wrapper}>
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                placeholder="Ex: João da Silva"
                                id="name"
                            />
                        </div>
                        <div className={style.wrapper}>
                            <label htmlFor="email">E-Mail</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Ex: joaosilva@gmail.com"
                                name="email"
                            />
                        </div>
                        <div className={style.wrapper}>
                            <label htmlFor="password">Senha</label>
                            <input
                                type="text"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                placeholder="Sua senha"
                                id="password"
                            />
                        </div>
                        <div className={style.wrapper}>
                            <label htmlFor="passwordConfirm">
                                Confirmar senha:
                            </label>
                            <input
                                type="text"
                                value={passwordReapeat}
                                onChange={(e) => {
                                    setPasswordReapeat(e.target.value);
                                }}
                                placeholder="Repita sua senha"
                                id="passwordConfirm"
                            />
                        </div>
                        <div className={style.btn}>
                            <button type="submit">Cadastrar</button>
                            <button>Já tem uma conta?</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
