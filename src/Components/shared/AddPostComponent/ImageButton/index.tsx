import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MouseEventHandler } from 'react'
import { Colors } from '../../../../assets/Colors'
import { PostButton } from '../../../common/PostButton.styled'


interface Props {
    onClick: MouseEventHandler
    Style: {}
}
export const ImageButton = (props: Props) => {
    return (
        <PostButton
            style={props.Style}
            color={Colors.Secoundry.gray}
            backgroundColor={Colors.Primary.Lightgray}
            onClick={props.onClick}
            aria-label='add post icon'
        >
            <FontAwesomeIcon className='fa-Post-icon' icon={faCamera} />
        </PostButton>)
}
