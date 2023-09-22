import { LOGO } from './styled/LOGO.styled'
import { PageName } from './styled/PageName.styled'
import { BorderSection } from './styled/BorderSection.styled'
import { Wrapper } from './styled/Wrapper'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const LogoAndPage = () => {

    const location = useLocation();
    const { t } = useTranslation()

    const PathName = () => {

        switch (location.pathname) {
            case "/":
                return t("nav_HOME")
            case "/Profile":
                return t("Aside_Profile")
            case "/People":
                return t("Aside_People")
            case "/People/Profile":
                return t("Aside_People")
            case "/Notifications":
                return t("nav_Notifications")
            case "/Settings":
                return t("Aside_Settings")
            case "/Collections":
                return t("nav_Collections")
            case "/Communities":
                return t("nav_Communities")
            default:
                return ""
        }
    }

    return (
        <Wrapper>
            <BorderSection borderLeft='unset'>
                <LOGO>{t("GooglePlus")}</LOGO>
            </BorderSection>

            <BorderSection borderLeft='1px solid white'>
                <PageName>{PathName()}</PageName>
            </BorderSection>
        </Wrapper>
    )
}
