import { useState } from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

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
            onClick={scroll}
        >
            {props.children || 'Link'}
        </Link>
    )
    

}