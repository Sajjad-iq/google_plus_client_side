import { LogoAndPage } from "./LEFT_SIDE/Logo_Page"
import { NavigationButtons } from "./RIGHT_SIDE/NavigationButtons"
import { Section } from "./Section.styled"
import { NavWrapper } from "./NavWrapper"
import React, { MouseEventHandler, useState } from "react"
import { MenuButton } from "../../Components/shared/MenuButton"
import { useLocation } from "react-router-dom"
import { Colors } from "../../assets/Colors"
import { SearchFiled } from "./CENTER_SIDE/SearchFiled"

interface Props {
    MenuButtonHandler: MouseEventHandler
    isMenuButtonActive: boolean
}

export const Nav = React.memo((props: Props) => {
    const [isActive, setISActive] = useState(false)
    const Toggle = () => setISActive(!isActive)
    const Location = useLocation()

    return (
        <NavWrapper style={{ background: Location.pathname == "/Collections" ? Colors.Secoundry.Cyan : Location.pathname == "/Communities" ? Colors.Secoundry.Green : Colors.Primary.red }}>

            <Section style={{ display: isActive ? "none" : "flex" }} >
                <MenuButton isActive={props.isMenuButtonActive} onClick={props.MenuButtonHandler} />
                <LogoAndPage />
            </Section>

            <SearchFiled isActive={isActive} setIsActive={setISActive} />
            <NavigationButtons SearchButtonOnClick={Toggle} SearchButtonDisplay={isActive} />

        </NavWrapper>
    )
})
