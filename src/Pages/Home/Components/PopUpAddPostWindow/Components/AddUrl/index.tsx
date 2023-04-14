import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MouseEventHandler } from 'react'
import { Button } from '../../../../../../Components/shared/SettingsEditSection/styled/Button.styled'
import './faStyled.css'

interface Props {
    OpenAddUrlScreen: MouseEventHandler
}
export const AddUrl = (props: Props) => {

    return (
        <Button onClick={props.OpenAddUrlScreen} style={{ margin: "0 10px" }}>
            <FontAwesomeIcon className='post-add-url-fa-icon' icon={faLink} />
        </Button>)
}
