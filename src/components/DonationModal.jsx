import style from "../styles/components/Modal.module.css"
import InputMask from 'react-input-mask';
import { useContext, useState } from "react";
import CurrencyInput from './CurrencyInput';
import { AppContext } from '../contexts/AppContext';

export default function DonationModal(){

    const [ donation, setDonation ] = useState('');

    const { closeDonationModal } = useContext(AppContext);

    function changeDonation(e){
        let value = e.target.value;
        setDonation(value);

        console.log(donation);
    }

    return(
        <section id={style.modal}>
            <div className={style.overlay} onClick={closeDonationModal}></div>
            <div className={style.modal}>
                <button
                    className={style.closeButton}
                    onClick={closeDonationModal}
                >
                    x
                </button>
                <h2 className="title black">Quanto deseja doar?</h2>
                <div className={style.wrapper} >
                    <CurrencyInput

                    onChange={(e)=>{changeDonation(e)}}
                    placeholder="$0.00" type="text"
                />
                </div>
                <div className={style.buttons} >
                    <button>
                        Doar
                    </button>
                    <a onClick={closeDonationModal}>
                        Cancelar doação
                    </a>
                </div>
            </div>
        </section>
    )
}