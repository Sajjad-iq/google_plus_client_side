import React, { useState } from 'react'
import { Container } from '../../common/Container.styled'
import { Column } from '../Column.styled'
import { SettingsSaveChanges } from '../SettingsSaveChanges'
import { Input } from './styled/input.styled'

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
        <Container display={props.IsActive ? "flex" : "none"}>
            <Column width='90%' padding='0' align='center'>
                <Input onChange={(e) => setInputChange(e.target.value)} />
                <SettingsSaveChanges OnCloseClick={() => props.setUrlScreenActive(!props.IsActive)} OnSaveClick={Save} />
            </Column>
        </Container>
    )
}
