import { useContext, useEffect, useRef } from 'react'
import { FlexSection } from '../../../Components/common/FlexSection.styled'
import { Input } from '../../../Components/common/Input.styled'
import { Column } from '../../../Components/shared/Column.styled'
import { RedFlag } from '../../../Components/shared/RedFlag'
import { GlobalContext } from '../../../Context/GlobalContext'
import { ChangeUserNameHandler } from '../../../services/SettingsServices/ChangeUserNameHandler'
import { useTranslation } from 'react-i18next'

export const EditUserNameAndFamilyName = () => {


    const { OnUserNameChange, IsUserNameValid, OnFamilyNameChange, IsFamilyNameValid } = ChangeUserNameHandler()
    const { User } = useContext(GlobalContext)
    const UserNameRef = useRef<any>()
    const FamilyNameRef = useRef<any>()
    const { t } = useTranslation()

    useEffect(() => {
        if (UserNameRef.current && FamilyNameRef.current) {
            UserNameRef.current.value = User.UserName
            FamilyNameRef.current.value = User.FamilyName
        }
    }, [])

    return (
        <Column width='100%' padding='0' align='flex-start'>
            <FlexSection >
                <Input ref={UserNameRef} name="user-name" IsValidValue={IsUserNameValid} onChange={OnUserNameChange} placeholder={t("userName")} required />
                <Input ref={FamilyNameRef} name="family-name" IsValidValue={IsFamilyNameValid} onChange={OnFamilyNameChange} placeholder={t("familyName")} required />
            </FlexSection>

            <RedFlag RedFlagMessage="Make sure adding a valid name" display={IsUserNameValid && IsFamilyNameValid ? "none" : "flex"} />
        </Column>
    )
}
