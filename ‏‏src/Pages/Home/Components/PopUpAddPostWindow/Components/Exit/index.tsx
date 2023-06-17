import { MouseEventHandler } from 'react'
import { SendBtn } from '../../../../../../Components/common/SendBtn.styled'
interface Props {
    onClick: MouseEventHandler
}
export const Exit = (props: Props) => {
    return (
        <SendBtn style={{ color: 'black' }} padding='3px 6px' onClick={props.onClick}>X</SendBtn>
    )
}
