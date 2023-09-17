import { FooterWrapper } from './styled/FooterWrapper'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from 'react';
import { NavButton } from '../../Components/shared/NavButton';
import { NotificationsBell } from '../../Components/shared/NotificationsBell';
import { GlobalContext } from '../../Context/GlobalContext';
import { MobileNavButton } from '../../Components/shared/MobileNavButoon';
import CollectionsSvg from "../../assets/ICONS/Collections.svg"
import ActiveCollectionsSvg from "../../assets/ICONS/CollectionsWhiteActive.svg"
import CommunitiesSvg from "../../assets/ICONS/coomunitiesBlackBg.svg"
import CommunitiesActiveSvg from "../../assets/ICONS/coomunitiesBlackBgActive.svg"
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const FooterNav = React.memo(() => {
    const { HasNotifications } = useContext(GlobalContext)
    const Location = useLocation()
    const { t } = useTranslation()

    return (
        <FooterWrapper>
            <NavButton CLass='footer' Name={t("nav_HOME")} To='/' ICON={faHouse} />
            <MobileNavButton Style={{ flexDirection: "column", padding: "0", color: Location.pathname === "/Collections" ? "white" : "gray" }} Name={t("nav_Collections")} To='/Collections' ICON={Location.pathname === "/Collections" ? ActiveCollectionsSvg : CollectionsSvg} />
            <MobileNavButton Style={{ flexDirection: "column", padding: "0", color: Location.pathname === "/Communities" ? "white" : "gray" }} Name={t("nav_Communities")} To='/Communities' ICON={Location.pathname === "/Communities" ? CommunitiesActiveSvg : CommunitiesSvg} />
            <NotificationsBell Name={t("nav_Notifications")} isForNav={false} CLass='footer' HasNotifications={HasNotifications} />
        </FooterWrapper>
    )
})
