import { Wrapper } from "../../Components/shared/Wrapper"
import { CollectionsCards } from "./Components/CollectionsCards"
import { CollectionsNav } from "./Components/CollectionsNav"

export const Collections = () => {

    return (
        <Wrapper style={{ alignItems: "flex-start", height: "100%" }}>
            <CollectionsNav />
            <CollectionsCards />
        </Wrapper>
    )
}
