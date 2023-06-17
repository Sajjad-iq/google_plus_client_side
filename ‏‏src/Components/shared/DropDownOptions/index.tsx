import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { OptionsWindowWrapper } from "../../../Pages/Profile/styled/OptionsWindowWrapper.styled"
import { H2 } from "../../common/H1.styled"
import { BackButton } from "../BackButton"
import { Row } from "../Row.styled"
import { OptionButtonAndOptionsWindow } from "./Components/OptionButtonAndOptionsWindow"


interface Props {
    children: ReactNode
    bottom: string
}
export const DropDownOptionsBottom = (props: Props) => {

    const Navigate = useNavigate()

    return (
        <OptionsWindowWrapper>

            <BackButton onClick={() => Navigate("/")} color={"white"} />

            <Row width='fit-content' padding='0' align='center' style={{ background: "transparent" }}>
                <H2 style={{ fontSize: "0.9rem", color: "white", marginRight: "30px" }}>ABOUT</H2>
                <OptionButtonAndOptionsWindow
                    bottom={props.bottom}
                    children={props.children}
                />
            </Row>

        </OptionsWindowWrapper>
    )
}
