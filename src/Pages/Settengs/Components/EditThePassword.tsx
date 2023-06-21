import { useState } from 'react'
import { Column } from '../../../Components/shared/Column.styled'
import { PasswordInputs } from '../../../Components/shared/PasswordInputs'
import { ChangePasswordHandler } from '../../../services/SettingsServices/ChangePasswordHandler'
import { SingleSectionWrapper } from '../styled/SingleSectionWrapper'

export const EditThePassword = () => {

    const [isActive, setIsActive] = useState(false)
    const { ConformPasswordInputValue, PasswordInputValue, setIsPasswordValid, OnPasswordChange, OnConformPasswordChange, onSave, IsPasswordValid, IsAllSectionsFilled } = ChangePasswordHandler(setIsActive)

    return (
        <SingleSectionWrapper>

            <Column width='100%' padding='0' align='center' style={{ display: isActive ? "flex" : "none" }}>
                <PasswordInputs
                    OnPasswordChange={OnPasswordChange}
                    OnConformPasswordChange={OnConformPasswordChange}
                    IsAllSectionsFilled={IsAllSectionsFilled}
                    IsConformPasswordValid={IsPasswordValid}
                    UserConformPasswordInputValue={ConformPasswordInputValue}
                    UserPasswordInputValue={PasswordInputValue}
                    setIsConformPasswordValid={setIsPasswordValid}
                />

            </Column>
        </SingleSectionWrapper>
    )
}
