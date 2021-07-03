import style from '../../styles/components/Home/About.module.css';

export default function About(){

    return(
        <section id={style.about}>
            <div className="container-min">
                <h2 className="title white">Sobre</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus ultrices eget metus ut ultricies. Vestibulum convallis
                    aliquam tellus ac suscipit. Maecenas luctus, ex in rhoncus
                    scelerisque, massa lacus maximus massa, non imperdiet risus 
                    turpis id magna. Proin rhoncus eget eros quis eleifend. Donec 
                    tempus mattis dui, vitae vestibulum nisi lacinia at. Nam nec 
                    sapien pellentesque, porta massa et, vestibulum elit. 
                    Curabitur a facilisis libero. Interdum et malesuada fames ac 
                    ante ipsum primis in faucibus.
                </p>
                <p>
                    Fusce rhoncus sed ex et maximus. In hac habitasse platea 
                    dictumst. Vivamus aliquet ante eu dui scelerisque, eu ultricies 
                    nibh volutpat. Aenean fringilla risus nunc, imperdiet ornare 
                    arcu euismod vel. Nam luctus ac elit et congue. Vestibulum augue
                    leo, sollicitudin at tellus at, tincidunt cursus tortor. Nam 
                    viverra est vel iaculis vestibulum.
                </p>
            </div>
        </section>
    )
}