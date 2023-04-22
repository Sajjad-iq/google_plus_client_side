
import { Container } from "../../../../../../Components/common/Container.styled"
import { SmallAddUserCard } from "../../../../../../Components/shared/SmallAddUserCard"
import { Selectors } from "./components/selectors"
import { GrayBox } from "./styled/GrayBox"

interface Props {
    value: string
    setValue: any
}
export const SelectWindow = (props: Props) => {
    return (
        <Container display={props.value === "Private" ? "flex" : "none"}>
            <GrayBox>
                <Selectors />
                <SmallAddUserCard UserName="Sajjad Kademm" UserIMG="" OnClick={() => props.setValue("Public")} />
                <SmallAddUserCard UserName="Sajjad Kademm" UserIMG="" OnClick={() => props.setValue("Public")} />
                <SmallAddUserCard UserName="Sajjad Kademm" UserIMG="" OnClick={() => props.setValue("Public")} />
                <SmallAddUserCard UserName="Sajjad Kademm" UserIMG="" OnClick={() => props.setValue("Public")} />
                <SmallAddUserCard UserName="Sajjad Kademm" UserIMG="" OnClick={() => props.setValue("Public")} />
            </GrayBox>
        </Container >
    )
}
