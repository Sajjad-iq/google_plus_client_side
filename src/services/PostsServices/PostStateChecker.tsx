import { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';

export const PostStateChecker = () => {

    const { OptionsValue, SpecificCollection } = useContext(GlobalContext)

    const PostStateCheckerHandler = () => {
        if (OptionsValue === "Collections") {
            return SpecificCollection.CollectionTitle
        } else if (OptionsValue === "Private") {
            return ""
        }
    }

    return PostStateCheckerHandler
}
