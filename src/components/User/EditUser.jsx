import style from "../../styles/components/User/EditUser.module.css";

export default function EditUser() {
    return (
        <section id={style.editUser}>
            <div className="container-min">
                <div className={style.description}>
                    <h2>
                        Descrição: <i class="fas fa-pen"></i>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar nisl felis, vel lacinia sem vestibulum
                        a. Phasellus sodales neque et tellus vulputate semper.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam sed vehicula ipsum. Phasellus varius nibh vel
                        tellus ornare sagittis. Fusce pulvinar vel sapien et
                        imperdiet. Nam condimentum blandit sapien, semper
                        faucibus nunc tempor eu. Pellentesque porttitor
                        consectetur ipsum, at consectetur velit blandit ac. Sed
                        sed justo vel eros tincidunt auctor. Etiam lectus erat,
                        pretium vel arcu nec, viverra vestibulum orci. Aenean
                        semper euismod ex eu dignissim.
                    </p>
                </div>
                <div className={style.options}>
                    <h2>Configurações:</h2>
                    <div className={style.wrapper}>
                        <label htmlFor="">Nome</label>
                        <input type="text" />
                    </div>
                    <div className={style.wrapper}>
                        <label htmlFor="">E-Mail</label>
                        <input type="text" />
                    </div>
                    <div className={style.wrapper}>
                        <label htmlFor="">Login</label>
                        <input type="text" />
                    </div>
                    <div className={style.wrapper}>
                        <label htmlFor="">Foto</label>
                        <input type="text" />
                    </div>
                    <div className={style.warning}>
                        <h3>Cuidado</h3>
                        <div className={style.btn}>
                            <button>Mudar senha</button>
                            <button>Excluir conta</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
