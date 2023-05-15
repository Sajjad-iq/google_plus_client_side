import React from 'react'
import { CardWrapper } from '../../../Collections/styled/CardWrapper.styled'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'
import { NavLink } from 'react-router-dom';

export const AddCollectionCard = () => {
    return (
        <CardWrapper>
            <NavLink to={"/AddCollection"}>
                <FontAwesomeIcon className='fa-add-collection-icon' icon={faPlus} />
            </NavLink>
        </CardWrapper>
    )
}
