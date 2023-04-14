import { SearchBtn } from '../../styled/SearchBtn.styled'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler } from 'react';
import "../style.css"

interface Props {
    display: string
    onClick: MouseEventHandler
}

export const SearchButton = (props: Props) => {
    return (
        <SearchBtn onClick={props.onClick} style={{ display: props.display }}>
            <FontAwesomeIcon className='search-btn' icon={faMagnifyingGlass} />
        </SearchBtn>
    )
}
