import style from "../../styles/components/Home/Contact.module.css";
import Aos from 'aos';
import { useState, useEffect } from 'react';

export default function Contact(){

    const [
        isReport,
        setIsReport
    ] = useState(true)
    const [
        changeFormColor,
        setChangeFormColor
    ] = useState('report')
    const [
        changeFormContent,
        setChangeFormContent
    ] = useState('Reportar um erro')
    const [
        changeFormTitle,
        setChangeFormTitle
    ] = useState('Entre em contato')
    const [
        messageContent,
        setMessageContent
    ] = useState("Sua mensagem...")
    const [
        submitButtonContent,
        setSubmitButtonContent
    ] = useState("Enviar!")
    const [
        emailToSend,
        setEmailToSend
    ] = useState("contato@sitecaridade.com.br");

    useEffect(()=>{
        Aos.init()
    },[])

    function changeForm(){
        if(isReport) {
            setIsReport(false)
            setChangeFormColor('contact')
            setChangeFormContent('Entrar em contato')
            setChangeFormTitle('Reportar um erro')
            setMessageContent('Seu reporte...')
            setSubmitButtonContent('Reportar!')
            setEmailToSend('report@sitecaridade.com.br')
        } else {
            setIsReport(true)
            setChangeFormColor('report')
            setChangeFormContent('Reportar um erro')
            setChangeFormTitle('Entrar em contato')
            setMessageContent('Sua mensagem...')
            setSubmitButtonContent('Enviar!')
            setEmailToSend('contato@sitecaridade.com.br')
        }
    }

    return(
        <section id={style.contact}>
            <div className="container-min">
                <div className={style.header}>
                    <h2 className="title black">
                        {changeFormTitle}
                    </h2>
                    <p>E-Mail: {emailToSend}</p>
                    <p>Telefone: +55 (62) 97756-7313</p>
                    <p 
                        onClick={changeForm}
                        className={`
                            ${style.changeForm} 
                            ${style[changeFormColor]}
                        `}
                    >{changeFormContent}</p>
                </div>
                <form className={style.form}>
                    <div className={style.wrapper}>
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
                    <div className={style.wrapper}>
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
                    <div className={style.wrapper}>
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
                    <div className={style.wrapper}>
                        <label htmlFor="message">
                            Mensagem:
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder={messageContent}
                        ></textarea>
                    </div>
                    <div className={`${style.wrapper} ${style.btn}`}>
                        <button type="submit">
                            {submitButtonContent}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}