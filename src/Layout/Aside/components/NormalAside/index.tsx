import React from 'react'
import { Wrapper } from '../../../../Components/common/Wrapper'
import { faHouse, faUser, faUsers, faGear, faTriangleExclamation, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { NavButton } from '../../../../Components/shared/NavButton'
import { Section } from '../../styled/Section.styled'
import { UserName } from '../../../../Components/common/UserName.styled'
import { MobileNavButton } from '../../../../Components/shared/MobileNavButoon'
import { Colors } from '../../../../assets/Colors'
import InstagramIcon from '../../../../assets/ICONS/instagram-svgrepo-com.svg'
import LinkedInIcon from '../../../../assets/ICONS/linkedin-fill-svgrepo-com.svg'
import GitIcon from '../../../../assets/ICONS/github-svgrepo-com.svg'


export const NormalAside = () => {


    return (
        <Wrapper style={{ justifyContent: "flex-start", padding: "0px" }}>
            <Section border='1px solid rgb(211, 210, 210)'>
                <NavButton CLass='' Name='Home' To='/' ICON={faHouse} />
                <NavButton CLass='' Name='Profile' To='/Profile' ICON={faUser} />
                <NavButton CLass='' Name='People' To='/People' ICON={faUsers} />
            </Section>

            <Section border='unset' style={{ alignItems: "flex-start" }}>
                <NavButton CLass='' Name='Settings' To='/Settings' ICON={faGear} />
                <NavButton CLass='' Name='Send Feedback' To='/Feedback' ICON={faTriangleExclamation} />
                <NavButton CLass='' Name='Help' To='/Help' ICON={faCircleQuestion} />
            </Section>

            <Section border='unset' style={{ alignItems: "flex-start" }}>
                <UserName IsCommentUserName={true} style={{ color: Colors.Primary.Lightgray, padding: "10px 20px" }}>Developer</UserName>
                <MobileNavButton CLass='' Name='linkedin' To='https://www.linkedin.com/in/sajjad-kademm-a68294209/' ICON={LinkedInIcon} />
                <MobileNavButton CLass='' Name='github' To='https://github.com/Sajjad-iq' ICON={GitIcon} />
                <MobileNavButton CLass='' Name='instagram' To='https://www.instagram.com/sajja3kademm' ICON={InstagramIcon} />
            </Section>
        </Wrapper>
    )
}