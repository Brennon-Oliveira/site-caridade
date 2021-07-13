import { createContext, useState } from "react";
import DonationModal from "../components/DonationModal";

export const AppContext = createContext();

export function AppProvider(props) {
    const [donationModalIsActive, setDonationModalIsActive] = useState(false);

    const [curRoute, setCurRoute] = useState(window.location.pathname);

    const [isAuth, setIsAuth] = useState(false);
    const [userData, setUserData] = useState({});

    function openDonationModal(e) {
        if (e) e.preventDefault();
        setDonationModalIsActive(true);
    }

    function closeDonationModal() {
        setDonationModalIsActive(false);
    }

    function changeRoute(route) {
        setCurRoute("/" + route);
        console.log(curRoute);
    }

    function logout() {
        setIsAuth(false);
        setUserData(false);
    }

    return (
        <AppContext.Provider
            value={{
                openDonationModal,
                closeDonationModal,
                changeRoute,
                curRoute,
                isAuth,
                setIsAuth,
                userData,
                setUserData,
                logout,
            }}
        >
            {props.children}
            {donationModalIsActive ? <DonationModal /> : ""}
        </AppContext.Provider>
    );
}
