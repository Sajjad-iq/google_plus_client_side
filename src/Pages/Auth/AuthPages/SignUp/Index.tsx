
import { SignUpHandler } from '../../../../services/SignUpServices/SignUpHandler'
import { AddFamilyNameHandler } from '../../../../services/SignUpServices/AddFamilyNameHandler'
import { AddUserNameHandler } from '../../../../services/SignUpServices/AddUserNameHandler'
import { AddEmailHandler } from '../../../../services/SignUpServices/AddEmailHandler'
import { AddConformPasswordHandler } from '../../../../services/SignUpServices/AddConformPasswordHandler'
import { useContext } from 'react'
import { AuthContext } from '../../../../Context/AuthContext'
import { AddPasswordHandler } from '../../../../services/SignUpServices/AddPasswordHandler'
import { SignUpSection } from '../../../../Components/common/SignUpSection.styled'
import { EmailInput } from '../../../../Components/shared/EmailInput'
import { PasswordInputs } from '../../../../Components/shared/PasswordInputs'
import { SubmitSection } from '../../../../Components/shared/SubmitSection'
import { Label } from '../../../../Components/shared/Label'
import { Wrapper } from '../../../../Components/common/Wrapper'
import { UserNameInput } from '../../../../Components/shared/UserNameInputs'
import { useTranslation } from 'react-i18next'

export const SignUp = () => {

  const { SignUpSubmit, isLoading } = SignUpHandler()
  const { OnUserNameChange, IsUserNameValid } = AddUserNameHandler()
  const { OnFamilyNameChange, IsFamilyNameValid } = AddFamilyNameHandler()
  const { OnEmailChange, IsEmailValid } = AddEmailHandler()
  const { OnPasswordChange } = AddPasswordHandler()
  const { OnConformPasswordChange } = AddConformPasswordHandler()
  const { IsAllSectionsFilled, IsConformPasswordValid, UserConformPasswordInputValue, UserPasswordInputValue, setIsConformPasswordValid } = useContext(AuthContext)
  const { t } = useTranslation()


  return (
    <Wrapper>
      <SignUpSection>

        <Label ForSignIn={false} Header={t("CreateAnAccount")} />

        <UserNameInput
          OnUserNameChange={OnUserNameChange}
          IsUserNameValid={IsUserNameValid}
          OnFamilyNameChange={OnFamilyNameChange}
          IsFamilyNameValid={IsFamilyNameValid}
        />

        <EmailInput
          OnEmailChange={OnEmailChange}
          IsEmailValid={IsEmailValid}
        />

        <PasswordInputs
          OnPasswordChange={OnPasswordChange}
          OnConformPasswordChange={OnConformPasswordChange}
          IsAllSectionsFilled={IsAllSectionsFilled}
          IsConformPasswordValid={IsConformPasswordValid}
          UserConformPasswordInputValue={UserConformPasswordInputValue}
          UserPasswordInputValue={UserPasswordInputValue}
          setIsConformPasswordValid={setIsConformPasswordValid}
        />


        <SubmitSection
          Loading={isLoading}
          SubmitButtonName={t("CreateAnAccount")}
          SubmitButtonClick={SignUpSubmit}
          TextLinkName={t("LogInInstead")}
          TextLinkPath={'/SignIn'}
        />

      </SignUpSection>
    </Wrapper>
  )
}

export default SignUp