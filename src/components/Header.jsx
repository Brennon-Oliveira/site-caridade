import { useEffect } from 'react';
import styles from './../styles/components/Header.module.css';

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
            <div className="container">
                <h1><a href="">Site Caridade</a></h1>
                <nav>
                    <button><span></span></button>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Posts</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#" className="red">Doar</a></li>
                        <li><a href="#" className="blue">Entrar</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}