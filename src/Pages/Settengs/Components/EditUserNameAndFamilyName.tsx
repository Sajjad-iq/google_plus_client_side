import { useState } from 'react'
import { Column } from '../../../Components/shared/Column.styled'
import { SettingsEditSection } from '../../../Components/shared/SettingsEditSection'
import { SettingsSaveChanges } from '../../../Components/shared/SettingsSaveChanges'
import { UserNameInput } from '../../../Components/shared/UserNameInputs'
import { UserData } from '../../../services/LocalStorage/UserData'
import { ChangeUserNameHandler } from '../../../services/SettingsServices/ChangeUserNameHandler'
import { SingleSectionWrapper } from '../styled/SingleSectionWrapper'
import { Article } from '../../../Components/shared/SettingsEditSection/styled/Article.styled'
import { Colors } from '../../../assets/Colors'

export const EditUserNameAndFamilyName = () => {

    let User = UserData()
    const [isActive, setIsActive] = useState(false)
    const { OnUserNameChange, IsUserNameValid, OnFamilyNameChange, IsFamilyNameValid, onSave } = ChangeUserNameHandler(setIsActive)

    return (
        <SingleSectionWrapper>
            <SettingsEditSection EditClick={() => setIsActive(!isActive)}
                SettingName={
                    <Article>
                        <Article >UserName:</Article>
                        <Article style={{ color: Colors.Secoundry.Cyan, marginLeft: "5px" }}>{` ${User.UserName} ${User.FamilyName}`}</Article>
                    </Article>
                }
            />

            <Column width='100%' padding='0' align='center' style={{ display: isActive ? "flex" : "none" }}>
                <UserNameInput
                    OnUserNameChange={OnUserNameChange}
                    IsUserNameValid={IsUserNameValid}
                    OnFamilyNameChange={OnFamilyNameChange}
                    IsFamilyNameValid={IsFamilyNameValid}
                />
                <SettingsSaveChanges
                    OnCloseClick={() => setIsActive(false)}
                    OnSaveClick={onSave}
                />
            </Column>


        </SingleSectionWrapper>
    )
}
