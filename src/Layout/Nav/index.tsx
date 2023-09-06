import { LogoAndPage } from "./LEFT_SIDE/Logo_Page"
import { NavigationButtons } from "./RIGHT_SIDE/NavigationButtons"
import { Section } from "./Section.styled"
import { NavWrapper } from "./NavWrapper"
import React, { MouseEventHandler, useContext, useState } from "react"
import { MenuButton } from "../../Components/shared/MenuButton"
import { useLocation } from "react-router-dom"
import { Colors } from "../../assets/Colors"
import { Row } from "../../Components/shared/Row.styled"
import { CollectionsNav } from "../../Pages/Collections/Components/CollectionsNav"
import { CollectionsButtonsNames } from "../../Pages/Collections/Components/names"
import { GlobalContext } from "../../Context/GlobalContext"
import { CommunitiesButtonsNames } from "../../Pages/Communities/Components/CommunitiesButtonsNames"

interface Props {
    MenuButtonHandler: MouseEventHandler
    isMenuButtonActive: boolean
}

export const Nav = React.memo((props: Props) => {
    const [isActive, setISActive] = useState(false)
    const Toggle = () => setISActive(!isActive)
    const Location = useLocation()
    const { SelectedButton, setSelectedButton } = useContext(GlobalContext)

    return (
        <NavWrapper style={{ background: Location.pathname == "/Collections" ? Colors.Secoundry.Cyan : Location.pathname == "/Communities" ? Colors.Secoundry.Green : Colors.Primary.red }}>

            <Row style={{ background: "none", justifyContent: "space-between" }} width="100%" padding="8px 5px" align="center">
                <Section style={{ display: isActive ? "none" : "flex" }} >
                    <MenuButton isActive={props.isMenuButtonActive} onClick={props.MenuButtonHandler} />
                    <LogoAndPage />
                </Section>

                <NavigationButtons />
            </Row>


            <CollectionsNav for="/Collections" color={'white'} buttonsNames={CollectionsButtonsNames} SelectedButton={SelectedButton} setSelectedButton={setSelectedButton} />
            <CollectionsNav for="/Communities" color={'white'} buttonsNames={CommunitiesButtonsNames} setSelectedButton={setSelectedButton} SelectedButton={SelectedButton} />

        </NavWrapper>

    )
})
