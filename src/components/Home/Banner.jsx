import Header from "../Header"
import style from '../../styles/components/Home/Banner.module.css';
import Aos from "aos";
import { useEffect } from 'react';

export default function Banner() {

    useEffect(()=>{
        Aos.init();
    })

    return (
        <section id={style.banner}>
            <Header type="default" />
            <div>
                <h2 data-aos="fade-left" >
                    Uma organização focada no futuro
                    <br />das crianças e adolescentes
                </h2>
            </div>
        </section>
    )
}