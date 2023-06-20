import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { Button } from './styled/Button.styled'
import "./styled/style.css"
import { MouseEventHandler, ReactNode } from 'react'
import { Article } from './styled/Article.styled'
import { Row } from '../Row.styled'

interface Props {
    SettingName: ReactNode
    EditClick: MouseEventHandler
}

export const SettingsEditSection = (props: Props) => {
    return (
        <Row width='100%' padding='0' align='space-between'>
            <Article>{props.SettingName}</Article>
            <Button onClick={props.EditClick}>
                <FontAwesomeIcon className='fa-setting-icon' icon={faPen} />
            </Button>
        </Row>
    )
}
