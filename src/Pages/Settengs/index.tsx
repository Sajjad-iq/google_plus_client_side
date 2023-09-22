import { useContext, useState } from 'react'
import { CyanButton } from '../../Components/common/CyanButton.styled'
import { Column } from '../../Components/shared/Column.styled'
import { Row } from '../../Components/shared/Row.styled'
import { EditDescription } from './Components/EditDescription'
import { EditUserNameAndFamilyName } from './Components/EditUserNameAndFamilyName'
import { SettingsWrapper } from './styled/SettingsWrapper'
import { SaveChanges } from '../../services/SettingsServices/SaveChanges'
import { useNavigate } from 'react-router-dom'
import { EditProfileImageAndCoverImage } from './Components/EditProflieImageAndCoverImage.tsx'
import { LoadingButton } from '../../Components/shared/LoadingButton'
import { Wrapper } from './styled/Wrapper'
import { GlobalContext } from '../../Context/GlobalContext'
import { EditTheEmail } from './Components/EditTheEmail'
import { TextLink } from '../../Components/shared/TextLink'
import { useTranslation } from 'react-i18next'


export const Settings = () => {

    const [IsLoading, setIsLoading] = useState(false)
    const { Save } = SaveChanges(setIsLoading)
    const Navigate = useNavigate()
    const { setUser } = useContext(GlobalContext)
    const { t } = useTranslation()

    const LogOut = async () => {
        setUser({})
        Navigate("/SignIn")
    }


    return (
        <Wrapper>

            <SettingsWrapper>
                <Column width='100%' padding='20px 0' align='flex-start'>
                    <EditProfileImageAndCoverImage />
                    <EditUserNameAndFamilyName />
                    <EditDescription />
                    <EditTheEmail />
                    <TextLink To={"/ChangePassword"} Text={t("ChangePass")} />
                </Column>

                <Row width='100%' padding='10px 0' align='space-between' style={{ alignSelf: "flex-end" }}>
                    <CyanButton onClick={LogOut} >{t("LogOut")}</CyanButton>
                    <LoadingButton Style={{}} onClick={Save} ButtonName={t("save")} IsLoading={IsLoading} />
                </Row>
            </SettingsWrapper>
        </Wrapper>

    )
}


export default Settings
