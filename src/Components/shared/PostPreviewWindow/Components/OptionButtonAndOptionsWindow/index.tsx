import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../../../../assets/GlobalStyles/style.css"
import { Row } from './styled/Row.styled'
import { OptionsWindow } from './OptionsWindow'
import { useState } from 'react'
import { Button } from '../../../../common/Button.styled'

interface Props {
    Data: {}
}
export const OptionButtonAndOptionsWindow = (props: Props) => {
    const [IsActive, setIsActive] = useState(false)

    return (
        <Row style={{ background: "none" }} width='fit-content' align='flex-start' padding='10px 0'>
            <Button onClick={() => setIsActive(!IsActive)}>
                <FontAwesomeIcon style={{ color: "white" }} className='post-fa-icon' icon={faEllipsisVertical} />
            </Button>
            <OptionsWindow setIsActive={setIsActive} data={props.Data} IsActive={IsActive} />
        </Row>
    )
}
