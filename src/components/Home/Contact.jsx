import style from "../../styles/components/Home/Contact.module.css";
import { Aos } from 'aos';
import { useState } from 'react';

export default function Contact(){

    const [changeFormColor, setChangeFormColor] = useState('contact')

    // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    return(
        <section id={style.contact}>
            <div className="container-min">
                <div className={style.header}>
                    <h2 className="title black">Entre em contato</h2>
                    <p>E-Mail: contato@sitecaridade.com.br</p>
                    <p>Telefone: +55 (62) 97756-7313</p>
                    <p className={`${style.changeForm} ${style[changeFormColor]}`}>Reportar um erro</p>
                </div>
                <form className={style.form}>
                    <div className="wrapper">
                        <label htmlFor="name">
                            Nome:
                        </label>
                        <input
                            type="text"
                            placeholder="Ex: João da Silva"
                            id="name"
                            name="name"
                        />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="email">
                            E-Mail:
                        </label>
                        <input
                            type="text"
                            placeholder="Ex: joaosilva@gmail.com"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="phone">
                            Numero:
                        </label>
                        <input
                            type="text"
                            placeholder="Ex: (01) 23456-7890"
                            id="phone"
                            name="phone"
                        />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="message">
                            Mensagem:
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Sua mensagem..."
                        ></textarea>
                    </div>
                    <div className="wrapper btn">
                        <button type="submit">
                            Enviar!
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}