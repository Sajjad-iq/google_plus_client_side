import { useState } from "react"
import { Input } from "../../Components/common/Input.styled"
import { SignInSection } from "../../Components/common/SignInSection.styled"
import { SignInWrapper } from "../../Components/common/SignInWrapper.styled"
import { Label } from "../../Components/shared/Label"
import { SubmitSection } from "../../Components/shared/SubmitSection"
import { ChangePasswordHandler } from "../../services/SettingsServices/ChangePasswordHandler"
import { PasswordInputs } from "../../Components/shared/PasswordInputs"
import { VerifyUsers } from "../../services/SettingsServices/VerifyUser"

export const ChangePassword = () => {

    const [verify, setVerify] = useState(false)
    const [verifyInputValue, setVerifyInputValue] = useState("")
    const { ConformPasswordInputValue, PasswordInputValue, setIsPasswordValid, OnPasswordChange, OnConformPasswordChange, onSubmit, IsPasswordValid, IsAllSectionsFilled, IsChangeLoading } = ChangePasswordHandler()
    const { VerifyUser, IsLoading } = VerifyUsers(setVerify)
    return (

        verify ?
            <SignInWrapper>
                <SignInSection>
                    <Label ForSignIn={true} Header='Enter new password' />
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
                        SubmitButtonName='Submit'
                        SubmitButtonClick={onSubmit}
                        TextLinkName={"Get Back ?"}
                        TextLinkPath={'/Settings'}
                    />
                </SignInSection >
            </SignInWrapper >

            :
            <SignInWrapper>
                <SignInSection>
                    <Label ForSignIn={true} Header='Verify your identity' />
                    < Input name="password" type={"password"} IsValidValue={true} onChange={(e) => setVerifyInputValue(e.target.value)} placeholder="Enter your password" required />
                    <SubmitSection
                        Loading={IsLoading}
                        SubmitButtonName='Submit'
                        SubmitButtonClick={() => VerifyUser(verifyInputValue)}
                        TextLinkName={"Get Back ?"}
                        TextLinkPath={'/Settings'}
                    />
                </SignInSection >

            </SignInWrapper >
    )
}
