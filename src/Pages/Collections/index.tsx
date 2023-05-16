import { useState } from "react"
import { Wrapper } from "../../Components/shared/Wrapper"
import { CollectionsCards } from "./Components/CollectionsCards"
import { CollectionsNav } from "./Components/CollectionsNav"

export const Collections = () => {

    const [SelectedButton, setSelectedButton] = useState(0)

    return (
        <Wrapper style={{ height: "100%", alignContent: "flex-start" }}>
            <CollectionsNav SelectedButton={SelectedButton} setSelectedButton={setSelectedButton} />
            <CollectionsCards SelectedButton={SelectedButton} />
        </Wrapper>
    )
}
