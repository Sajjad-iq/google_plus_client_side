import { FooterWrapper } from './styled/FooterWrapper'
import { faHouse, faUsers } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from 'react';
import { NavButton } from '../../Components/shared/NavButton';
import { NotificationsBell } from '../../Components/shared/NotificationsBell';
import { GlobalContext } from '../../Context/GlobalContext';
import { MobileNavButton } from '../../Components/shared/MobileNavButoon';
import CollectionsSvg from "../../assets/ICONS/Collections.svg"
import CyanCollectionsSvg from "../../assets/ICONS/CollectionsCyan.svg"
import CommunitiesSvg from "../../assets/ICONS/coomunities.svg"
import CommunitiesGreenSvg from "../../assets/ICONS/coomunitiesGreen.svg"

import { useLocation } from 'react-router-dom';
import { Colors } from '../../assets/Colors';

export const FooterNav = React.memo(() => {
    const { HasNotifications } = useContext(GlobalContext)
    const Location = useLocation()

    return (
        <FooterWrapper>
            <NavButton CLass='footer' Name='Home' To='/' ICON={faHouse} />
            <MobileNavButton Style={{ flexDirection: "column", padding: "0", color: Location.pathname === "/Collections" ? Colors.Secoundry.Cyan : "gray" }} Name='Collections' To='/Collections' ICON={Location.pathname === "/Collections" ? CyanCollectionsSvg : CollectionsSvg} />
            <MobileNavButton Style={{ flexDirection: "column", padding: "0", color: Location.pathname === "/Communities" ? Colors.Secoundry.Green : "gray" }} Name='Communities' To='/Communities' ICON={Location.pathname === "/Communities" ? CommunitiesGreenSvg : CommunitiesSvg} />
            <NotificationsBell Name='Notifications' isForNav={false} CLass='footer' HasNotifications={HasNotifications} />
        </FooterWrapper>
    )
})
