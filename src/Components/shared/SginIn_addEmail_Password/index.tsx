import { useContext, useState } from 'react'
import { EmailAndPasswordStateHandlers } from '../../../services/SignInServices/EmailAndPasswordStateHandlers'
import { Input } from '../../common/Input.styled'
import { CheckBox } from '../CheckBox'
import { Column } from '../Column.styled'
import { RedFlag } from '../RedFlag'
import { AuthContext } from '../../../Context/AuthContext'

export const AddEmailAndPassword = () => {
    const [IsChecked, setIsChecked] = useState(false)
    const { OnEmailInputChange, OnPasswordInputChange, SignInEmailAndPasswordValid } = EmailAndPasswordStateHandlers()
    const { IsAllSectionsFilledText } = useContext(AuthContext)

    return (
        <Column width='100%' padding='0' align='flex-start'>
            <Input placeholder='Email' onChange={OnEmailInputChange} IsValidValue={true} />
            <Input placeholder='Password' onChange={OnPasswordInputChange} type={IsChecked ? "text" : "password"} IsValidValue={true} />

            <Column width='100%' padding='15px 0' align='flex-start'>
                <RedFlag display={SignInEmailAndPasswordValid ? "none" : "flex"} RedFlagMessage={IsAllSectionsFilledText} />
                <CheckBox IsChecked={IsChecked} setIsChecked={setIsChecked} />
            </Column>

        </Column>
    )
}
