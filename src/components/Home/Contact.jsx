import style from "../../styles/components/Home/Contact.module.css";
import Aos from 'aos';
import { useState, useEffect } from 'react';
import InputMask from "react-input-mask";
import { Element } from 'react-scroll';

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

    const [
        sucessMessage,
        setSucessMessage
    ] = useState('Messagem enviada com sucesso!😃');
    const [
        errorMessage,
        setErrorMessage
    ] = useState('Houve um erro ao envia a mensagem!😢');
    const [
        waitMessage,
        setWaitMessage
    ] = useState('Calma! Estamos enviando sua mensagem!🕐');

    const [isSending, setIsSending] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [nameVoid, setNameVoid] = useState(false);
    const [emailVoid, setEmailVoid] = useState(false);
    const [phoneVoid, setPhoneVoid] = useState(false);
    const [messageVoid, setMessageVoid] = useState(false);

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
            setSucessMessage('Reporte enviado com sucesso!😃');
            setErrorMessage('Houve um erro ao enviar o reporte!😢');
            setWaitMessage('Calma! Estamos enviando seu reporte!🕐');
        } else {
            setIsReport(true)
            setChangeFormColor('report')
            setChangeFormContent('Reportar um erro')
            setChangeFormTitle('Entrar em contato')
            setMessageContent('Sua mensagem...')
            setSubmitButtonContent('Enviar!')
            setEmailToSend('contato@sitecaridade.com.br')
            setSucessMessage('Messagem enviada com sucesso!😃');
            setErrorMessage('Houve um erro ao enviar a mensagem!😢');
            setWaitMessage('Calma! Estamos enviando sua mensagem!🕐');
        }
    }

    function submit(e){
        e.preventDefault();
        if(isSending){
            alert(waitMessage);
            return false
        }
        if(name === '' || name==='Campos vazios não são permitidos'){
            setNameVoid(true);
            document.getElementById("name").classList.add('formError');
            setName('Campos vazios não são permitidos')
            return false
        }

        if(email === '' || email ==='Campos vazios não são permitidos'){
            setEmailVoid(true);
            document.getElementById("email").classList.add('formError');
            setEmail('Campos vazios não são permitidos')
            return false
        }

        if(phone === '' || phone==='Campos vazios não são permitidos'){
            setPhoneVoid(true);
            document.getElementById("phone").classList.add('formError');
            return false
        }

        if(message === '' || message ==='Campos vazios não são permitidos'){
            setMessageVoid(true);
            document.getElementById("message").classList.add('formError');
            setMessage('Campos vazios não são permitidos');
            return false
        }
        if(phone[phone.length - 1] === '_'){
            setPhoneVoid(true);
            document.getElementById("phone").classList.add('formError');
            alert('Insira seu número completo')
            return false
        }
        setIsSending(true);

        setTimeout(()=>{
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            alert(sucessMessage);
            setIsSending(false);
        },4000)

        // emailjs.sendForm('service_7zwr6sd', formTemplate, e.target, "user_HZpQGea5eCHlOIxwiWhKO")
        // .then((result) => {
        //     alert(sucessMessage);
        //     setName('');
        //     setEmail('');
        //     setPhone('');
        //     setMessage('');
        //     setIsSending(false);
        // }, () => {
        //     alert(errorMessage);
        //     setIsSending(false);
        // });
    }

    function nameReset(){
        if(nameVoid){
            document.getElementById("name").classList.remove('formError');
            setName('');
            setNameVoid(false);
        }
    }

    function emailReset(){
        if(emailVoid){
            document.getElementById("email").classList.remove('formError');
            setEmail('');
            setEmailVoid(false);
        }
    }

    function phoneReset(){
        if(phoneVoid){
            document.getElementById("phone").classList.remove('formError');
            setPhoneVoid(false);
        }
    }

    function messageReset(){
        if(messageVoid){
            document.getElementById("message").classList.remove('formError');
            setMessage('')
            setMessageVoid(false);
        }
    }

    return(
        <section id={style.contact}>
            <Element name="Contact" className="container-min">
                <div className={style.header}>
                    <h2 data-aos="fade-left" className="title black">
                        {changeFormTitle}
                    </h2>
                    <p data-aos="fade-right">E-Mail: {emailToSend}</p>
                    <p data-aos="fade-left">Telefone: +55 (62) 97756-7313</p>
                    <p 
                        onClick={changeForm}
                        className={`
                            ${style.changeForm} 
                            ${style[changeFormColor]}
                        `}
                    >{changeFormContent}</p>
                </div>
                <form onSubmit={e=>submit(e)} className={style.form}>
                    <div data-aos="flip-right" className={style.wrapper}>
                        <label htmlFor="name">
                            Nome:
                        </label>
                        <input
                            onClick={nameReset}
                            onChange={val=>setName(val.target.value)}
                            value={name}
                            type="text"
                            placeholder="Ex: João da Silva"
                            id="name"
                            name="name"
                        />
                    </div>
                    <div data-aos="flip-right" className={style.wrapper}>
                        <label htmlFor="email">
                            E-Mail:
                        </label>
                        <input
                            onClick={emailReset}
                            onChange={val=>setEmail(val.target.value)}
                            value={email}
                            type="text"
                            placeholder="Ex: joaosilva@gmail.com"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div data-aos="flip-right" className={style.wrapper}>
                        <label htmlFor="phone">
                            Numero:
                        </label>
                        <InputMask
                            mask='+55 (99) 99999-9999'
                            onClick={phoneReset}
                            onChange={val=>setPhone(val.target.value)}
                            value={phone}
                            type="text"
                            placeholder="Ex: (01) 23456-7890"
                            id="phone"
                            name="phone"
                        />
                    </div>
                    <div data-aos="flip-right" className={style.wrapper}>
                        <label htmlFor="message">
                            Mensagem:
                        </label>
                        <textarea
                            onClick={messageReset}
                            onChange={val=>setMessage(val.target.value)}
                            value={message}
                            name="message"
                            id="message"
                            placeholder={messageContent}
                        ></textarea>
                    </div>
                    <div
                        data-aos="flip-left"
                        className={`${style.wrapper} ${style.btn}`}
                    >
                        <button>
                            {submitButtonContent}
                        </button>
                    </div>
                </form>
            </Element>
        </section>
    )
}