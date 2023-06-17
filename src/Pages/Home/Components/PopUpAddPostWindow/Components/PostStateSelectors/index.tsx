import { useContext } from 'react'
import "./styles.css"
import { GlobalContext } from '../../../../../../Context/GlobalContext'

export const PostStateSelectors = () => {
    const { setOptionsValue } = useContext(GlobalContext)

    return (
        <select id="PostOption" onChange={(e) => setOptionsValue(e.target.value)}>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Collections">Collections</option>
        </select>
    )
}
