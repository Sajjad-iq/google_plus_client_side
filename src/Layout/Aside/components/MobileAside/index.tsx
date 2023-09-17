import { useEffect } from 'react'
import { MobileAsideWrapper } from '../../styled/MobileAsideWrapper'
import { Column } from '../../../../Components/shared/Column.styled'
import { UserData } from '../../../../services/LocalStorage/UserData'
import Cover from '../../../../assets/ICONS/Photos/marguerite-729510__340.webp'
import ProfileImage from '../../../../assets/ICONS/ProfileImg.jpg'
import { ImageCoverWrapper } from '../../styled/imageCoverWrapper'
import { UserName } from '../../../../Components/common/UserName.styled'
import { Colors } from '../../../../assets/Colors'
import { ProfileUserImg } from '../../../../Components/common/ProfileUserImg.styled'
import { faUsers, faGear, faCircleQuestion, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { NavButton } from '../../../../Components/shared/NavButton'
import { Section } from '../../styled/Section.styled'
import { MobileNavButton } from '../../../../Components/shared/MobileNavButoon'
import ProfileIcon from '../../../../assets/ICONS/user-circle-svgrepo-com.svg'
import InstagramIcon from '../../../../assets/ICONS/instagram-svgrepo-com.svg'
import LinkedInIcon from '../../../../assets/ICONS/linkedin-fill-svgrepo-com.svg'
import GitIcon from '../../../../assets/ICONS/github-svgrepo-com.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row } from '../../../../Components/shared/Row.styled'
import { useTranslation } from 'react-i18next'

interface Props {
    setIsPageActive: any
}
export const MobileAside = (props: Props) => {

    const User = UserData()
    const { t } = useTranslation()

    useEffect(() => {

        const closeMenu = (e: any) => {
            props.setIsPageActive(false)
            e.stopPropagation()
        }

        document.body.addEventListener("mousedown", closeMenu)
        return () => document.body.removeEventListener("mousedown", closeMenu)
    }, [props.setIsPageActive])

    return (
        <MobileAsideWrapper>
            <ImageCoverWrapper style={{ background: `url(${User.CoverPicture !== "" ? User.CoverPicture : Cover})` }}>

                <Column width='100%' padding='0' align='flex-start' >
                    <ProfileUserImg key={"Aside Profile image"} src={User.ProfilePicture !== "" ? User.ProfilePicture : ProfileImage} alt='profile image' style={{ position: "static", width: "55px", height: "55px" }} />

                    <Column width='100%' padding='0' align='flex-start' style={{ background: "none", marginTop: "15px", justifyContent: "space-between" }}>

                        <Row width='100%' padding='0' align='center' style={{ background: "none", justifyContent: "space-between" }}>
                            <UserName IsCommentUserName={false} style={{ color: Colors.Secoundry.darkGray, margin: "5px 0", fontSize: "1rem" }}>
                                {`${User.UserName} ${User.FamilyName}`}
                            </UserName>
                            <FontAwesomeIcon style={{ color: Colors.Primary.SoftBlack, margin: "3px", fontSize: "0.9rem" }} icon={faCaretDown} />
                        </Row>

                        <UserName IsCommentUserName={true} style={{ color: Colors.Primary.SoftBlack }}>{User.Email}</UserName>
                    </Column>
                </Column>

            </ImageCoverWrapper>

            <Section border='1px solid rgb(211, 210, 210)'>
                <MobileNavButton textStyle={{ margin: "0 25px" }} Name={t("Aside_Profile")} To='/Profile' ICON={ProfileIcon} />
                <NavButton CLass='margin-x' Name={t("Aside_People")} To='/People' ICON={faUsers} />
                <NavButton CLass='margin-x' Name={t("Aside_Settings")} To='/Settings' ICON={faGear} />
                <NavButton CLass='margin-x' Name={t("Aside_Help")} To='/Help' ICON={faCircleQuestion} />
            </Section>

            <Section border='unset' style={{ alignItems: "flex-start" }}>
                <UserName IsCommentUserName={true} style={{ color: Colors.Primary.SoftBlack, padding: "10px 20px" }}>{t("Aside_develoepr")}</UserName>
                <MobileNavButton textStyle={{ margin: "0 25px" }} Name='linkedin' To='https://www.linkedin.com/in/sajjad-kademm-a68294209/' ICON={LinkedInIcon} />
                <MobileNavButton textStyle={{ margin: "0 25px" }} Name='github' To='https://github.com/Sajjad-iq' ICON={GitIcon} />
                <MobileNavButton textStyle={{ margin: "0 25px" }} Name='instagram' To='https://www.instagram.com/sajja3kademm' ICON={InstagramIcon} />
            </Section>

        </MobileAsideWrapper>
    )
}
