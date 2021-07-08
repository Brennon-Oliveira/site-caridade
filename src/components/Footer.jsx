import style from './../styles/components/Footer.module.css';
import FooterNav from './subComponents/FooterNav';
import LastFooter from './subComponents/LastFooter';

export default function Footer() {

    return(
        <footer id={style.footer}>
            <FooterNav />
            <LastFooter />
        </footer>
    )
}