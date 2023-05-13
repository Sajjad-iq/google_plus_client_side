import React, { useContext, useState } from 'react'
import { CyanButton } from '../../Components/common/CyanButton.styled'
import { H2 } from '../../Components/common/H1.styled'
import { Column } from '../../Components/shared/Column.styled'
import { Row } from '../../Components/shared/Row.styled'
import { EditDescription } from './Components/EditDescription'
import { EditTheEmail } from './Components/EditTheEmail'
import { EditThePassword } from './Components/EditThePassword'
import { EditUserNameAndFamilyName } from './Components/EditUserNameAndFamilyName'
import { SettingsWrapper } from './styled/SettingsWrapper'
import { SaveChanges } from '../../services/SettingsServices/SaveChanges'
import { useNavigate } from 'react-router-dom'
import { UserData } from '../../services/LocalStorage/UserData'
import { EditProfileImageAndCoverImage } from './Components/EditProflieImageAndCoverImage.tsx'
import { LoadingButton } from '../../Components/shared/LoadingButton'
import { Wrapper } from './styled/Wrapper'
import { GlobalContext } from '../../Context/GlobalContext'


export const Settings = () => {
    const [IsLoading, setIsLoading] = useState(false)
    const { Save } = SaveChanges(setIsLoading)
    const Navigate = useNavigate()
    const { setUser } = useContext(GlobalContext)

    const LogOut = async () => {
        setUser({})
        Navigate("/SignIn")
    }


    return (
        <Wrapper>

            <SettingsWrapper>
                <Column width='100%' padding='20px 0' align='flex-start'>
                    <H2>Profile Settings</H2>
                    <EditProfileImageAndCoverImage />
                    <EditUserNameAndFamilyName />
                    <EditDescription />
                </Column>

                <Row width='100%' padding='10px 0' align='space-between'>
                    <CyanButton onClick={LogOut} >Log Out</CyanButton>
                    <LoadingButton Style={{}} onClick={Save} ButtonName="Save" IsLoading={IsLoading} />
                </Row>
            </SettingsWrapper>
        </Wrapper>

    )
}

