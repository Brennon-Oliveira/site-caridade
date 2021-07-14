import style from "../../styles/components/User/Profile.module.css";
import userProfile from "../../assets/images/no-profile-img.jpg";

export default function Profile() {
    return (
        <section id={style.profile}>
            <div className="container">
                <img src={userProfile} alt="" />
                <h2>
                    João da Silva -{" "}
                    <span>
                        <i class="fas fa-heart"></i>507
                    </span>
                </h2>
                <p>Contribuição: R$105.00</p>
            </div>
        </section>
    );
}
