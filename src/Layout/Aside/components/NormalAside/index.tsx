import { Wrapper } from '../../../../Components/common/Wrapper'
import { faHouse, faUsers, faGear, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { NavButton } from '../../../../Components/shared/NavButton'
import { Section } from '../../styled/Section.styled'
import { UserName } from '../../../../Components/common/UserName.styled'
import { MobileNavButton } from '../../../../Components/shared/MobileNavButoon'
import { Colors } from '../../../../assets/Colors'
import InstagramIcon from '../../../../assets/ICONS/instagram-svgrepo-com.svg'
import LinkedInIcon from '../../../../assets/ICONS/linkedin-fill-svgrepo-com.svg'
import GitIcon from '../../../../assets/ICONS/github-svgrepo-com.svg'
import { useLocation } from 'react-router-dom'
import CollectionsSvg from "../../../../assets/ICONS/Collections.svg"
import CyanCollectionsSvg from "../../../../assets/ICONS/CollectionsCyan.svg"
import ProfileIcon from '../../../../assets/ICONS/user-circle-svgrepo-com.svg'
import redProfileIcon from '../../../../assets/ICONS/reduser-circle-svgrepo-com.svg'
import CommunitiesSvg from "../../../../assets/ICONS/coomunities.svg"
import CommunitiesActiveSvg from "../../../../assets/ICONS/coomunitiesWhiteBgActive.svg"
import { useTranslation } from 'react-i18next'

export const NormalAside = () => {

    const Location = useLocation()
    const { t } = useTranslation()



    return (
        <Wrapper style={{ justifyContent: "flex-start", padding: "0px", overflow: "scroll" }}>
            <Section border='1px solid rgb(211, 210, 210)'>
                <NavButton CLass='' Name={t("nav_HOME")} To='/' ICON={faHouse} />
                <MobileNavButton Style={{ color: Location.pathname === "/Collections" ? Colors.Secoundry.Cyan : "gray" }} Name={t("nav_Collections")} To='/Collections' ICON={Location.pathname === "/Collections" ? CyanCollectionsSvg : CollectionsSvg} />
                <MobileNavButton Style={{ color: Location.pathname === "/Communities" ? Colors.Secoundry.Green : "gray" }} Name={t("nav_Communities")} To='/Communities' ICON={Location.pathname === "/Communities" ? CommunitiesActiveSvg : CommunitiesSvg} />
                <MobileNavButton Style={{}} Name={t("Aside_Profile")} To='/Profile' ICON={Location.pathname === "/Profile" ? redProfileIcon : ProfileIcon} />
                <NavButton CLass='' Name={t("Aside_People")} To='/People' ICON={faUsers} />
            </Section>
            <Section border='unset' style={{ alignItems: "flex-start" }}>
                <NavButton CLass='' Name={t("Aside_Settings")} To='/Settings' ICON={faGear} />
                <NavButton CLass='' Name={t("Aside_Help")} To='/Help' ICON={faCircleQuestion} />
            </Section>

            <Section border='unset' style={{ alignItems: "flex-start" }}>
                <UserName IsCommentUserName={true} style={{ color: Colors.Primary.SoftBlack, padding: "10px 20px" }}>{t("Aside_develoepr")}</UserName>
                <MobileNavButton Style={{}} Name='linkedin' To='https://www.linkedin.com/in/sajjad-kademm-a68294209/' ICON={LinkedInIcon} />
                <MobileNavButton Style={{}} Name='github' To='https://github.com/Sajjad-iq' ICON={GitIcon} />
                <MobileNavButton Style={{}} Name='instagram' To='https://www.instagram.com/sajja3kademm' ICON={InstagramIcon} />
            </Section>
        </Wrapper>
    )
}
