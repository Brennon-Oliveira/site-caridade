import style from '../../styles/components/Posts/Post.module.css';
import userProfile from '../../assets/images/no-profile-img.jpg';
import { useState, useEffect } from 'react';

export default function Post(props) {

    const [ id, setId ] = useState(props.id || '');
    const [ username, setUsername ] = useState(props.username || 'Joe Due');
    const [ content, setContent ] = useState(props.content || '...');
    const [ isLiked, setIsLiked ] = useState(props.isLiked || false);
    const [ imgProfile, setImgProfile ] = useState(props.image || userProfile);

    function changeLike(){
        if(props.changeLike && id){
            props.changeLike(id);
        } else {
            const message = isLiked ? 'descurtir' : 'curtir';
            alert(`Erro ao ${message} usuário!`);
        }
    }

    return(
        <div id={style.post}>
            <div className="container">
                <img src={imgProfile} alt="User Profile" />
                <div className={style.content}>
                    <div className={style.header}>
                        <h2>{username}</h2>
                        <button
                            onClick={changeLike}
                            className={
                            isLiked ? "isLiked" : "notIsLiked"
                        }>
                            <span>
                                {isLiked ? 'Descurtir' : 'Curtir'}
                            </span> <i
                            className={
                                isLiked ? "fas fa-times" : "fas fa-check"
                            }
                            ></i>
                        </button>
                    </div>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}