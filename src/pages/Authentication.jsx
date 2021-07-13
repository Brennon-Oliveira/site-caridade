import { useState, useContext } from "react";
import style from "../styles/components/Authentication.module.css";
import { AppContext } from "../contexts/AppContext";
import { Redirect } from "react-router-dom";

export default function Authentication() {
    const [login, setLogin] = useState(true);

    const [emailLogin, setEmailLogin] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const [userLogin, setUserLogin] = useState("root");
    const [userEmail, setUserEmail] = useState("root@email.site");
    const [userPassword, setUserPassword] = useState("admin");
    const [userDataPlaceholder, setUserDataPlaceholder] = useState({
        id: "userid",
        name: "João da Silva",
        contribution: 105.0,
        email: "root@email.site",
        login: "root",
        likes: 512,
        firstContribution: "23/04/2019",
        lastContribution: "14/01/2021",
        accessToken: "kasdfjals124",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam eget pulvinar nisl felis, vel lacinia sem vestibulum a.
            Phasellus sodales neque et tellus vulputate semper. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Aliquam sed vehicula
            ipsum. Phasellus varius nibh vel tellus ornare sagittis. Fusce
            pulvinar vel sapien et imperdiet. Nam condimentum blandit sapien,
            semper faucibus nunc tempor eu. Pellentesque porttitor consectetur
            ipsum, at consectetur velit blandit ac. Sed sed justo vel eros
            tincidunt auctor. Etiam lectus erat, pretium vel arcu nec, viverra
            vestibulum orci. Aenean semper euismod ex eu dignissim.`,
    });

    const { isAuth, setIsAuth, setUserData, changeRoute } =
        useContext(AppContext);

    function changePage() {
        setLogin(!login);

        setEmailLogin("");
        setName("");
        setEmail("");
        setPassword("");
        setPasswordRepeat("");
    }

    function sendLogin(e) {
        e.preventDefault();
        if (!emailLogin || !password) {
            alert("Campos vazios não são permitidos!");
            return;
        }

        if (
            (emailLogin !== userLogin || emailLogin !== userEmail) &&
            password !== userPassword
        ) {
            alert("Login ou Senha incorretos!");
            return;
        }

        setIsAuth(true);
        setUserData(userDataPlaceholder);
        changeRoute("");
    }

    function sendRegister(e) {}

    if (isAuth) {
        changeRoute("");
        return <Redirect to="/" />;
    }

    if (login) {
        return (
            <section id={style.auth}>
                <div className={style.auth}>
                    <h2 className="title">Entrar</h2>
                    <form
                        onSubmit={(e) => {
                            sendLogin(e);
                        }}
                    >
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
                        <div className={style.btn}>
                            <button type="submit">Entrar</button>
                            <button onClick={changePage}>
                                Ainda não tem uma conta?
                            </button>
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
                    <form
                        onSubmit={(e) => {
                            sendRegister(e);
                        }}
                    >
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
                                Confirmar senha
                            </label>
                            <input
                                type="text"
                                value={passwordRepeat}
                                onChange={(e) => {
                                    setPasswordRepeat(e.target.value);
                                }}
                                placeholder="Repita sua senha"
                                id="passwordConfirm"
                            />
                        </div>
                        <div className={style.btn}>
                            <button type="submit">Cadastrar</button>
                            <button onClick={changePage}>
                                Já tem uma conta?
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
