import { Outlet, useLocation } from 'react-router-dom'
import { Aside } from '../Layout/Aside'
import { FooterNav } from '../Layout/Footer'
import { Nav } from '../Layout/Nav'
import { ActiveToggle } from '../services/PostsServices/PostsScreenToggle'
import { Footer } from './styled/footer'
import { Header } from './styled/Header'
import { LeftSide } from './styled/LeftSide'
import { RightSide } from './styled/RightSide'
import { Row } from './styled/Row'
import { SplitWrapper } from './styled/SplitWrapper'


export const SplitScreen = () => {

    const { IsPageActive, Toggle, setIsPageActive } = ActiveToggle()
    const Location = useLocation()


    return (
        <SplitWrapper >

            <Header>
                <Nav MenuButtonHandler={Toggle} isMenuButtonActive={IsPageActive} />
            </Header>

            <Row style={{ height: Location.pathname === "/Collections" || Location.pathname === "/Communities" ? "calc(100% - 114px)" : "calc(100% - 66px)" }}>
                <LeftSide>
                    <Aside setIsPageActive={setIsPageActive} IsPageActive={IsPageActive} />
                </LeftSide>

                <RightSide>
                    <Outlet />
                </RightSide>
            </Row>

            <Footer>
                <FooterNav />
            </Footer>
        </SplitWrapper>
    )
}
