import React, { useContext } from 'react'
import { Container } from '../../Components/common/Container.styled'
import { NavButton } from '../../Components/shared/NavButton'
import { ErrorCard } from './styled/ErrorCard.styled'
import { ErrorMessage } from './styled/ErrorMessage.styled'
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { P } from '../../Components/common/P.styled'
import { GlobalContext } from '../../Context/GlobalContext'

export const Error = () => {
    const { ErrMessage } = useContext(GlobalContext)
    return (
        <Container display='flex'>
            <ErrorCard>
                <ErrorMessage>{ErrMessage}</ErrorMessage>
                <P style={{ marginBottom: "10px" }}>Try Again</P>
                <NavButton CLass="footer" To='/' Name='' ICON={faRepeat} />
            </ErrorCard>
        </Container>
    )
}
