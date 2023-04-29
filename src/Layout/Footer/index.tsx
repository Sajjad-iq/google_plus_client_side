import { FooterWrapper } from './styled/FooterWrapper'
import { faHouse, faBell, faUsers, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from 'react';
import { NavButton } from '../../Components/shared/NavButton';
import { NotificationsBell } from '../../Components/shared/NotificationsBell';
import { GlobalContext } from '../../Context/GlobalContext';

export const FooterNav = React.memo(() => {
    const { HasNotifications } = useContext(GlobalContext)

    return (
        <FooterWrapper>
            <NavButton CLass='footer' Name='Home' To='/' ICON={faHouse} />
            <NavButton CLass='footer' Name='Profile' To='/Profile' ICON={faUser} />
            <NavButton CLass='footer' Name='People' To='/People' ICON={faUsers} />
            <NotificationsBell Name='Notifications' isForNav={false} CLass='footer' HasNotifications={HasNotifications} />
        </FooterWrapper>
    )
})
