import { useContext } from "react"
import { Wrapper } from "../../Components/shared/Wrapper"
import { CollectionsCards } from "./Components/CollectionsCards"
import { GlobalContext } from "../../Context/GlobalContext"

export const Collections = () => {

    const { SelectedButton } = useContext(GlobalContext)

    return (
        <Wrapper style={{ height: "100%", alignContent: "flex-start" }}>
            <CollectionsCards SelectedButton={SelectedButton} />
        </Wrapper>
    )
}

export default Collections
