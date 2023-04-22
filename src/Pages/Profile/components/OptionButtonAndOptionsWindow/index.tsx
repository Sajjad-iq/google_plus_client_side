import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../../../assets/GlobalStyles/style.css"
import { OptionsWindow } from '../OptionsWindow'
import { useState } from 'react'
import { Button } from '../../../../Components/common/Button.styled'
import { Wrapper } from '../../../../Components/shared/Wrapper'

export const OptionButtonAndOptionsWindow = () => {
    const [IsActive, setIsActive] = useState(false)
    return (
        <Wrapper style={{ width: "fit-content" }}>
            <Button onClick={() => setIsActive(!IsActive)}>
                <FontAwesomeIcon className='post-fa-icon' style={{ color: "white" }} icon={faEllipsisVertical} />
            </Button>

            <OptionsWindow setIsActive={setIsActive} IsActive={IsActive} />
        </Wrapper>
    )
}
