import style from '../../styles/components/Posts/Aside.module.css';
import { useState } from 'react';

export default function Aside(){

    const [
        search,
        setSearch
    ] = useState('');

    const [
        sortBy,
        setSortBy
    ] = useState('');

    return (
        <aside id={style.aside}>
            <form className={style.search} action="" className="search">
                <label htmlFor="search">Pesquisar:</label>
                <div className={style.wrapper}>
                    <input id="search" type="text" />
                    <button><i class="fas fa-search"></i></button>
                </div>
            </form>
            <form className={style.sortBy} action="">
                <label htmlFor="sortBy">Classificar por:</label>
                <select name="" id="sortBy">
                    <option value="">Classificar por likes</option>
                    <option value="">Classificar por data</option>
                </select>
                <button>Filtrar!</button>
            </form>
        </aside>
    )
}