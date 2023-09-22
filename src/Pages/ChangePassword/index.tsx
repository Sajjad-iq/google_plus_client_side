import { useState } from "react"
import { Input } from "../../Components/common/Input.styled"
import { SignInSection } from "../../Components/common/SignInSection.styled"
import { SignInWrapper } from "../../Components/common/SignInWrapper.styled"
import { Label } from "../../Components/shared/Label"
import { SubmitSection } from "../../Components/shared/SubmitSection"
import { ChangePasswordHandler } from "../../services/SettingsServices/ChangePasswordHandler"
import { PasswordInputs } from "../../Components/shared/PasswordInputs"
import { VerifyUsers } from "../../services/SettingsServices/VerifyUser"
import { useTranslation } from "react-i18next"

export const ChangePassword = () => {

    const [verify, setVerify] = useState(false)
    const [verifyInputValue, setVerifyInputValue] = useState("")
    const { ConformPasswordInputValue, PasswordInputValue, setIsPasswordValid, OnPasswordChange, OnConformPasswordChange, onSubmit, IsPasswordValid, IsAllSectionsFilled, IsChangeLoading } = ChangePasswordHandler()
    const { VerifyUser, IsLoading } = VerifyUsers(setVerify)
    const { t } = useTranslation()

    return (

        verify ?
            <SignInWrapper>
                <SignInSection>
                    <Label ForSignIn={true} Header={t("NewPass")} />
                    <PasswordInputs
                        OnPasswordChange={OnPasswordChange}
                        OnConformPasswordChange={OnConformPasswordChange}
                        IsAllSectionsFilled={IsAllSectionsFilled}
                        IsConformPasswordValid={IsPasswordValid}
                        UserConformPasswordInputValue={ConformPasswordInputValue}
                        UserPasswordInputValue={PasswordInputValue}
                        setIsConformPasswordValid={setIsPasswordValid}
                    />
                    <SubmitSection
                        Loading={IsChangeLoading}
                        SubmitButtonName={t("submit")}
                        SubmitButtonClick={onSubmit}
                        TextLinkName={t("getBack")}
                        TextLinkPath={'/Settings'}
                    />
                </SignInSection >
            </SignInWrapper >

            :
            <SignInWrapper>
                <SignInSection>
                    <Label ForSignIn={true} Header={t("verifyYourIde")} />
                    < Input name="password" type={"password"} IsValidValue={true} onChange={(e) => setVerifyInputValue(e.target.value)} placeholder={t("Pass")} required />
                    <SubmitSection
                        Loading={IsLoading}
                        SubmitButtonName={t("submit")}
                        SubmitButtonClick={() => VerifyUser(verifyInputValue)}
                        TextLinkName={t("getBack")}
                        TextLinkPath={'/Settings'}
                    />
                </SignInSection >

            </SignInWrapper >
    )
}


export default ChangePassword
