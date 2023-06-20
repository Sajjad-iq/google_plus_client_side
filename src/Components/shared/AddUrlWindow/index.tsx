import { useState } from 'react'
import { Column } from '../Column.styled'
import { SettingsSaveChanges } from '../SettingsSaveChanges'
import { Input } from './styled/input.styled'
import { Wrapper } from '../Wrapper'

interface Props {
    IsActive: boolean
    setUrl: any
    setUrlScreenActive: any
}
export const AddUrlWindow = (props: Props) => {

    const [inputChange, setInputChange] = useState("")

    const Save = () => {
        props.setUrl(inputChange)
        props.setUrlScreenActive(!props.IsActive)
    }

    return (
        <Wrapper style={{ display: props.IsActive ? "flex" : "none", position: "absolute", top: "0", height: "100%" }} >
            <Column width='90%' padding='0' align='center'>
                <Input onChange={(e) => setInputChange(e.target.value)} />
                <SettingsSaveChanges OnCloseClick={() => props.setUrlScreenActive(!props.IsActive)} OnSaveClick={Save} />
            </Column>
        </Wrapper>
    )
}
