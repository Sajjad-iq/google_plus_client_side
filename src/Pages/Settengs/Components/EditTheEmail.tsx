import { useState } from 'react'
import { Column } from '../../../Components/shared/Column.styled'
import { EmailInput } from '../../../Components/shared/EmailInput'
import { SettingsEditSection } from '../../../Components/shared/SettingsEditSection'
import { SettingsSaveChanges } from '../../../Components/shared/SettingsSaveChanges'
import { GlobalContext } from '../../../Context/GlobalContext'
import { UserData } from '../../../services/LocalStorage/UserData'
import { ChangeEmailHandler } from '../../../services/SettingsServices/ChangeEmailHandler'
import { SingleSectionWrapper } from '../styled/SingleSectionWrapper'
import { Article } from '../../../Components/shared/SettingsEditSection/styled/Article.styled'
import { Colors } from '../../../assets/Colors'

export const EditTheEmail = () => {

    let User = UserData()
    const [isActive, setIsActive] = useState(false)
    const { OnEmailChange, IsEmailValid, onSave } = ChangeEmailHandler(setIsActive)

    return (

        <SingleSectionWrapper>

            <SettingsEditSection EditClick={() => setIsActive(!isActive)}
                SettingName={
                    <Article>
                        <Article >Email:</Article>
                        <Article style={{ color: Colors.Secoundry.Cyan, marginLeft: "5px" }}>{User.Email}</Article>
                    </Article>
                }
            />

            <Column width='100%' padding='0' align='center' style={{ display: isActive ? "flex" : "none" }}>
                <EmailInput
                    OnEmailChange={OnEmailChange}
                    IsEmailValid={IsEmailValid}
                />
                <SettingsSaveChanges
                    OnCloseClick={() => setIsActive(false)}
                    OnSaveClick={onSave}
                />
            </Column>

        </SingleSectionWrapper>
    )
}
