import { useState } from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

export default function A(props){

    const [
        page,
        setPage
    ] = useState(
        props.page === undefined ||
        props.page === 'home' ? '': props.page
    );
    const [element, setElement] = useState(props.to || 'Home'); 
    const [duration, setDuration] = useState(props.duration || 500);
    const [smooth, setSmooth] = useState(props.smooth || true);
    const [offset, setOffset] = useState(props.offset || -30);

    const { changeRoute } = useContext(AppContext);

    async function pre(){
        changeRoute(page)
        await scroll();
    }

    async function scroll(){
        await setTimeout(()=>{},3000);
        Scroll.scroller.scrollTo(element,{
            duration,
            smooth,
            offset
        })
    }

    return(
        <Link
            to={page}
            className={props.className}
            onClick={pre}
        >
            {props.children || 'Link'}
        </Link>
    )
    

}