import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import "../../../../../assets/GlobalStyles/style.css"
import { OptionsWindow } from '../OptionsWindow'
import { ReactNode, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper } from '../../../Wrapper'
import { Button } from '../../../../common/Button.styled'

interface Props {
    children: ReactNode
    bottom: string

}

export const OptionButtonAndOptionsWindow = (props: Props) => {
    const [IsActive, setIsActive] = useState(false)
    return (
        <Wrapper style={{ width: "fit-content", background: "none" }}>

            <Button onClick={() => setIsActive(!IsActive)}>
                <FontAwesomeIcon className='post-fa-icon' style={{ color: "white" }} icon={faEllipsisVertical} />
            </Button>

            <OptionsWindow
                bottom={props.bottom}
                children={props.children}
                setIsActive={setIsActive}
                IsActive={IsActive} />

        </Wrapper>
    )
}
