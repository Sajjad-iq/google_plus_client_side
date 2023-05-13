import { FooterWrapper } from './styled/FooterWrapper'
import { faHouse, faUsers } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from 'react';
import { NavButton } from '../../Components/shared/NavButton';
import { NotificationsBell } from '../../Components/shared/NotificationsBell';
import { GlobalContext } from '../../Context/GlobalContext';
import { MobileNavButton } from '../../Components/shared/MobileNavButoon';
import CollectionsSvg from "../../assets/ICONS/Collections.svg"
import RedCollectionsSvg from "../../assets/ICONS/CollectionsRed.svg"
import { useLocation } from 'react-router-dom';

export const FooterNav = React.memo(() => {
    const { HasNotifications } = useContext(GlobalContext)
    const Location = useLocation()

    return (
        <FooterWrapper>
            <NavButton CLass='footer' Name='Home' To='/' ICON={faHouse} />
            <MobileNavButton Style={{ flexDirection: "column", padding: "0" }} Name='Collections' To='/Collections' ICON={Location.pathname === "/Collections" ? RedCollectionsSvg : CollectionsSvg} />
            <NavButton CLass='footer' Name='People' To='/People' ICON={faUsers} />
            <NotificationsBell Name='Notifications' isForNav={false} CLass='footer' HasNotifications={HasNotifications} />
        </FooterWrapper>
    )
})
