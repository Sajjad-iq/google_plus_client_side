import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./faStyled.css"
import { InputLabel } from '../../../../../../Components/common/InputLabel.styled';
import { ChangeEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    onChange: ChangeEventHandler
    Style: {}
    Icon: IconProp
}

export const AddImage = (props: Props) => {

    return (

        <InputLabel htmlFor="post-image-upload" style={props.Style}>
            <FontAwesomeIcon className='add-post-fa-icon' icon={props.Icon} />
            <input
                style={{ display: "none" }}
                type="file"
                id="post-image-upload"
                accept='.jpeg, .png, .jpg'
                onChange={props.onChange}
            />
        </InputLabel>

    )
}
