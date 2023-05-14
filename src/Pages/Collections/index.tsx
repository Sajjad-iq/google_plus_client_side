import { Wrapper } from "../../Components/shared/Wrapper"
import { CollectionsCards } from "./Components/CollectionsCards"
import { CollectionsNav } from "./Components/CollectionsNav"

export const Collections = () => {

    return (
        <Wrapper style={{ height: "100%", alignContent: "flex-start" }}>
            <CollectionsNav />
            <CollectionsCards />
        </Wrapper>
    )
}
