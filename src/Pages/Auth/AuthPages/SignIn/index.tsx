import { useTranslation } from 'react-i18next'
import { SignInSection } from '../../../../Components/common/SignInSection.styled'
import { SignInWrapper } from '../../../../Components/common/SignInWrapper.styled'
import { Label } from '../../../../Components/shared/Label'
import { AddEmailAndPassword } from '../../../../Components/shared/SginIn_addEmail_Password'
import { SubmitSection } from '../../../../Components/shared/SubmitSection'
import { SignInSubmitHandler } from '../../../../services/SignInServices/SignInSubmitHandler'

export const SignIn = () => {

    const { SignInSubmit, isLoading } = SignInSubmitHandler()
    const { t } = useTranslation()

    return (
        <SignInWrapper>
            <SignInSection>
                <Label ForSignIn={true} Header={t("SignInWithYourAccount")} />
                <AddEmailAndPassword />
                <SubmitSection
                    Loading={isLoading}
                    SubmitButtonName={t("LogIn")}
                    SubmitButtonClick={SignInSubmit}
                    TextLinkName={t("YouDon'tHaveAnAccount")}
                    TextLinkPath={'/SignUp'}
                />
            </SignInSection>
        </SignInWrapper>
    )
}

export default SignIn