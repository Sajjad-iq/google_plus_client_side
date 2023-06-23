import { useState } from "react"
import { Wrapper } from "../../Components/shared/Wrapper"
import { CollectionsCards } from "./Components/CollectionsCards"
import { CollectionsNav } from "./Components/CollectionsNav"
import { CollectionsButtonsNames } from "./Components/names"
import { Colors } from "../../assets/Colors"

export const Collections = () => {

    const [SelectedButton, setSelectedButton] = useState(0)

    return (
        <Wrapper style={{ height: "100%", alignContent: "flex-start" }}>
            <CollectionsNav color={Colors.Secoundry.Cyan} buttonsNames={CollectionsButtonsNames} SelectedButton={SelectedButton} setSelectedButton={setSelectedButton} />
            <CollectionsCards SelectedButton={SelectedButton} />
        </Wrapper>
    )
}

export default Collections
