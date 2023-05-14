import React from 'react'
import { CardWrapper } from '../../../Collections/styled/CardWrapper.styled'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'

export const AddCollectionCard = () => {
    return (
        <CardWrapper>
            <FontAwesomeIcon className='fa-add-collection-icon' icon={faPlus} />
        </CardWrapper>
    )
}
