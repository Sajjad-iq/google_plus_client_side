import { MouseEventHandler } from 'react'
import { Button } from '../../../Pages/Auth/styled/Button.styled'
import { LoadingButton } from '../LoadingButton'
import { Row } from '../Row.styled'
import { TextLink } from '../TextLink'

interface Props {
    SubmitButtonName: string
    SubmitButtonClick: MouseEventHandler
    TextLinkName: string
    TextLinkPath: string
    Loading: boolean
}
export const SubmitSection = (props: Props) => {
    return (
        <Row align='space-between' padding='0' width='100%'>
            <TextLink To={props.TextLinkPath} Text={props.TextLinkName} />
            <LoadingButton Style={{}} IsLoading={props.Loading} onClick={props.SubmitButtonClick} ButtonName={props.SubmitButtonName} />
        </Row>
    )
}
