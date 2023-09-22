import { useContext, useEffect, useRef, useState } from 'react'
import { Column } from '../../../Components/shared/Column.styled'
import { GlobalContext } from '../../../Context/GlobalContext'
import { UserData } from '../../../services/LocalStorage/UserData'
import { ChangeEmailHandler } from '../../../services/SettingsServices/ChangeEmailHandler'
import { FlexSection } from '../../../Components/common/FlexSection.styled'
import { RedFlag } from '../../../Components/shared/RedFlag'
import { Input } from '../../../Components/common/Input.styled'
import { useTranslation } from 'react-i18next'

export const EditTheEmail = () => {

    const { OnEmailChange, IsEmailValid } = ChangeEmailHandler()
    const { User } = useContext(GlobalContext)
    const EmailRef = useRef<any>()
    const { t } = useTranslation()

    useEffect(() => {
        if (EmailRef.current) {
            EmailRef.current.value = User.Email
        }
    }, [])
    return (
        <Column width='100%' padding='0' align='center'>
            <Input ref={EmailRef} name="email" IsValidValue={IsEmailValid} onChange={OnEmailChange} placeholder={t("email")} required />
            <RedFlag RedFlagMessage="Make sure adding a valid email" display={IsEmailValid ? "none" : "flex"} />
        </Column>

    )
}
