import { useEffect, ChangeEventHandler, useState, useContext } from 'react'
import { FlexSection } from '../../common/FlexSection.styled'
import { Input } from '../../common/Input.styled'
import { CheckBox } from '../CheckBox'
import { Column } from '../Column.styled'
import { RedFlag } from '../RedFlag'
import { AuthContext } from '../../../Context/AuthContext'

interface Props {
    OnPasswordChange: ChangeEventHandler<HTMLInputElement>
    OnConformPasswordChange: ChangeEventHandler<HTMLInputElement>
    IsAllSectionsFilled: boolean
    IsConformPasswordValid: boolean
    UserConformPasswordInputValue: string
    UserPasswordInputValue: string
    setIsConformPasswordValid: any
}

export const PasswordInputs = (props: Props) => {

    const [IsChecked, setIsChecked] = useState(false)
    const { IsAllSectionsFilledText } = useContext(AuthContext)

    useEffect(() => {
        if (props.UserConformPasswordInputValue == props.UserPasswordInputValue) props.setIsConformPasswordValid(true)
        else props.setIsConformPasswordValid(false)
    }, [props.UserConformPasswordInputValue, props.UserPasswordInputValue])


    return (
        <Column width='100%' align='flex-start' padding='10px 0'>
            <FlexSection>
                <Input
                    onChange={props.OnPasswordChange}
                    name='password'
                    IsValidValue={props.IsConformPasswordValid}
                    type={IsChecked ? "text" : "password"}
                    placeholder="Password" required
                />
                <Input
                    onChange={props.OnConformPasswordChange}
                    name='conform password'
                    IsValidValue={props.IsConformPasswordValid}
                    type={IsChecked ? "text" : "password"}
                    placeholder="Confirm Password" required
                />
            </FlexSection>


            <RedFlag display={props.IsConformPasswordValid ? "none" : "flex"} RedFlagMessage={'Make sure your add valid Password'} />
            <RedFlag display={props.IsAllSectionsFilled ? "none" : "flex"} RedFlagMessage={IsAllSectionsFilledText} />
            <CheckBox IsChecked={IsChecked} setIsChecked={setIsChecked} />
        </Column>
    )

}
