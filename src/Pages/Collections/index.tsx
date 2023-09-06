import { useContext } from "react"
import { CollectionsCards } from "./Components/CollectionsCards"
import { GlobalContext } from "../../Context/GlobalContext"

export const Collections = () => {

    const { SelectedButton } = useContext(GlobalContext)

    return (
        <CollectionsCards SelectedButton={SelectedButton} />
    )
}

export default Collections
