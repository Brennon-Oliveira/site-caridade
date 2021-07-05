import { useEffect } from 'react';
import styles from './../styles/components/Header.module.css';
import { Element } from 'react-scroll';
import { PROJECT_NAME } from '../consts'
import A from './A';

export default function Header(props){

    function toggleMenu(e){
        if(e.type === 'touchstart') e.preventDefault();
        var menu = document.querySelector('#'+styles.header+' nav');
        menu.classList.toggle('active');
    }

    useEffect(()=>{
        var btn = document.querySelector('#'+styles.header+' button')
        btn.addEventListener('touchstart',(e)=>{toggleMenu(e)})
        btn.addEventListener('click',(e)=>{toggleMenu(e)})
    },[])
    
    return (
        <header id={styles.header} className={props.type}>
            <Element name="Home" className="container">
                <h1>
                    <a href="">{ PROJECT_NAME }</a>
                    <div></div>
                </h1>
                <nav>
                    <button><span></span></button>
                    <ul>
                        <li><A>Home</A></li>
                        <li><A page='posts'>Posts</A></li>
                        <li><A to='Contact'>Contato</A></li>
                        <li><A href="#" className="red">Doar</A></li>
                        <li><A page='login' className="blue">Entrar</A></li>
                    </ul>
                </nav>
            </Element>
        </header>
    )
}