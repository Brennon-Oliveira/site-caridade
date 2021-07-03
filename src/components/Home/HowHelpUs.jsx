import style from '../../styles/components/Home/HowHelpUs.module.css';
import Aos from 'aos';
import { useEffect } from 'react';

export default function HowHelpUs(){

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    return(
        <section id={style.howHelpUs} >
            <div className={style.overlay}></div>
            <div className="container-min">
                <h2 className="title white">Como nos ajudar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus ultrices eget metus ut ultricies. Vestibulum
                    convallis aliquam tellus ac suscipit. Maecenas luctus, ex
                    in rhoncus scelerisque, massa lacus maximus massa, non
                    imperdiet risus turpis id magna. Proin rhoncus eget eros
                    quis eleifend. Donec tempus mattis dui, vitae vestibulum
                    nisi lacinia at. Nam nec sapien pellentesque, porta massa
                    et, vestibulum elit. Curabitur a facilisis libero. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus.
                </p>
                <p>
                    Fusce rhoncus sed ex et maximus. In hac habitasse platea
                    dictumst. Vivamus aliquet ante eu dui scelerisque,
                    euultricies nibh volutpat. Aenean fringilla risus nunc,
                    imperdiet ornare arcu euismod vel. Nam luctus ac elit et
                    congue. Vestibulum augue leo, sollicitudin at tellus at,
                    tincidunt cursus tortor. Nam viverra est vel iaculis
                    vestibulum.
                </p>
                <div>
                    <a href="">Doar</a>
                </div>
            </div>
        </section>
    )
}