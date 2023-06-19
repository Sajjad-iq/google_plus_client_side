import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../style.css"
import { Link } from "react-router-dom";



export const SearchButton = () => {
    return (
        <Link to={"/Search"}>
            <FontAwesomeIcon className='search-btn' icon={faMagnifyingGlass} />
        </Link>
    )
}
