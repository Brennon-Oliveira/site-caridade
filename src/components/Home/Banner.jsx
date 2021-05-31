import Header from "../Header"
import style from '../../styles/components/Home/Banner.module.css';

export default function Banner() {

    return (
        <section id={style.banner}>
            <Header type="default" />
            <div>
                <h2>Uma organização focada no futuro<br />das crianças e adolescentes</h2>
            </div>
        </section>
    )
}