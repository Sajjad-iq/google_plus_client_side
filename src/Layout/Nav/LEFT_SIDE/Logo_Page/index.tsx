import { LOGO } from './styled/LOGO.styled'
import { PageName } from './styled/PageName.styled'
import { BorderSection } from './styled/BorderSection.styled'
import { Wrapper } from './styled/Wrapper'
import { useLocation } from 'react-router-dom'

export const LogoAndPage = () => {

    const location = useLocation();

    const PathName = () => {
        switch (location.pathname) {
            case "/":
                return "Home"
            case "/Profile":
                return "Profile"
            case "/People":
                return "People"
            case "/People/Profile":
                return "People"
            case "/Notifications":
                return "Notifications"
            case "/Settings":
                return "Settings"
            case "/Collections":
                return "Collections"
            case "/Communities":
                return "Communities"
            default:
                return ""
        }
    }

    return (
        <Wrapper>
            <BorderSection borderLeft='unset'>
                <LOGO>Google +</LOGO>
            </BorderSection>

            <BorderSection borderLeft='1px solid white'>
                <PageName>{PathName()}</PageName>
            </BorderSection>
        </Wrapper>
    )
}
