import { OptionsWindowWrapper } from '../../styled/OptionsWindowWrapper.styled'
import { OptionButtonAndOptionsWindow } from '../OptionButtonAndOptionsWindow'
import { BackButton } from '../../../../Components/shared/BackButton'
import { useNavigate } from 'react-router-dom'
import { Row } from '../../../../Components/shared/Row.styled'
import { H2 } from '../../../../Components/common/H1.styled'

export const OptionBar = () => {

    const Navigate = useNavigate()

    return (
        <OptionsWindowWrapper>

            <BackButton onClick={() => Navigate("/")} color={"white"} />

            <Row width='fit-content' padding='0' align='center' style={{ background: "transparent" }}>
                <H2 style={{ fontSize: "0.9rem", color: "white", marginRight: "30px" }}>ABOUT</H2>
                <OptionButtonAndOptionsWindow />
            </Row>

        </OptionsWindowWrapper>
    )
}
