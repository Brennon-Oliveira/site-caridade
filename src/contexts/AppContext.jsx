
import { createContext, useState } from 'react';
import DonationModal from '../components/DonationModal';

export const AppContext = createContext();

export function AppProvider(props){

    const [ 
        donationModalIsActive,
        setDonationModalIsActive 
    ] = useState(false);

    function openDonationModal(e){
        if(e) e.preventDefault()
        setDonationModalIsActive(true)
    }

    function closeDonationModal(){
        setDonationModalIsActive(false)
    }

    return(
        <AppContext.Provider value={{
            openDonationModal,
            closeDonationModal
        }}> 
            {props.children}
            { donationModalIsActive ? <DonationModal /> : ''}
        </AppContext.Provider>
    )
}