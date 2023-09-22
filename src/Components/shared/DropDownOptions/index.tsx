import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { OptionsWindowWrapper } from "../../../Pages/Profile/styled/OptionsWindowWrapper.styled"
import { H2 } from "../../common/H1.styled"
import { BackButton } from "../BackButton"
import { Row } from "../Row.styled"
import { OptionButtonAndOptionsWindow } from "./Components/OptionButtonAndOptionsWindow"
import { Colors } from "../../../assets/Colors"
import Cookies from "js-cookie"


interface Props {
    children: ReactNode
    bottom: string
    for: string
}
export const DropDownOptionsBottom = (props: Props) => {

    const Navigate = useNavigate()
    const currentLanguageCode = Cookies.get('i18next') || 'ar'

    return (
        props.for === "profile" ?
            <OptionsWindowWrapper>

                <BackButton onClick={() => Navigate("/")} color={"white"} />

                <Row width='fit-content' padding='0' align='center' style={{ background: "transparent", border: "none" }}>
                    <H2 style={{ fontSize: "0.9rem", color: "white", marginRight: "30px" }}>{currentLanguageCode === 'ar' ? "حول" : "ABOUT"}</H2>
                    <OptionButtonAndOptionsWindow
                        bottom={props.bottom}
                        children={props.children}
                    />
                </Row>

            </OptionsWindowWrapper>
            :
            props.for === "post" ?
                <OptionsWindowWrapper style={{ display: "flex", position: "static", background: Colors.Primary.red }}>

                    <BackButton onClick={() => Navigate("/")} color={"white"} />

                    <Row width='fit-content' padding='0' align='center' style={{ background: "transparent" }}>
                        <OptionButtonAndOptionsWindow
                            bottom={props.bottom}
                            children={props.children}
                        />
                    </Row>

                </OptionsWindowWrapper>
                :
                null
    )
}
