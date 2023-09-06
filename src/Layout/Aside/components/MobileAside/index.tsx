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
import { faUsers, faGear, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { NavButton } from '../../../../Components/shared/NavButton'
import { Section } from '../../styled/Section.styled'
import { MobileNavButton } from '../../../../Components/shared/MobileNavButoon'
import ProfileIcon from '../../../../assets/ICONS/user-circle-svgrepo-com.svg'
import InstagramIcon from '../../../../assets/ICONS/instagram-svgrepo-com.svg'
import LinkedInIcon from '../../../../assets/ICONS/linkedin-fill-svgrepo-com.svg'
import GitIcon from '../../../../assets/ICONS/github-svgrepo-com.svg'

interface Props {
    setIsPageActive: any
}
export const MobileAside = (props: Props) => {
    const User = UserData()

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

                    <Column width='fit-content' padding='0' align='flex-start' style={{ background: "none" }}>
                        <UserName IsCommentUserName={false} style={{ margin: "15px 0px 3px 0px", color: Colors.Secoundry.darkGray }}>
                            {`${User.UserName} ${User.FamilyName}`}
                        </UserName>
                        <UserName IsCommentUserName={true} style={{ color: Colors.Secoundry.darkGray }}>{User.Email}</UserName>
                    </Column>
                </Column>

            </ImageCoverWrapper>

            <Section border='1px solid rgb(211, 210, 210)'>
                <MobileNavButton Style={{}} Name='Profile' To='/Profile' ICON={ProfileIcon} />
                <NavButton CLass='' Name='People' To='/People' ICON={faUsers} />
                <NavButton CLass='' Name='Settings' To='/Settings' ICON={faGear} />
                <NavButton CLass='' Name='Help' To='/Help' ICON={faCircleQuestion} />
            </Section>

            <Section border='unset' style={{ alignItems: "flex-start" }}>
                <UserName IsCommentUserName={true} style={{ color: Colors.Primary.SoftBlack, padding: "10px 20px" }}>Developer</UserName>
                <MobileNavButton Style={{}} Name='linkedin' To='https://www.linkedin.com/in/sajjad-kademm-a68294209/' ICON={LinkedInIcon} />
                <MobileNavButton Style={{}} Name='github' To='https://github.com/Sajjad-iq' ICON={GitIcon} />
                <MobileNavButton Style={{}} Name='instagram' To='https://www.instagram.com/sajja3kademm' ICON={InstagramIcon} />
            </Section>

        </MobileAsideWrapper>
    )
}
