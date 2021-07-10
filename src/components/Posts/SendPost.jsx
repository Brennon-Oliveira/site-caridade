import style from '../../styles/components/Posts/SendPost.module.css'

export default function SendPost(){

    return(
        <div id={style.sendPost}>
            <div className={style.input}>
                <textarea></textarea>
                <button>
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    )
}