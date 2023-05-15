import { Navigate, useNavigate } from 'react-router-dom'
import { H2 } from '../../../../Components/common/H1.styled'
import { BackButton } from '../../../../Components/shared/BackButton'
import { LoadingButton } from '../../../../Components/shared/LoadingButton'
import { Row } from '../../../../Components/shared/Row.styled'
import { OptionsWindowWrapper } from '../../../Profile/styled/OptionsWindowWrapper.styled'

export const CollectionNav = () => {

  const Navigate = useNavigate()

  return (
    <OptionsWindowWrapper style={{ position: "absolute", borderRadius: "3px" }}>

      <Row width='fit-content' padding='0' align='center' style={{ background: "transparent" }}>
        <BackButton onClick={() => Navigate("/")} color={"white"} />
        <H2 style={{ fontSize: "0.9rem", color: "white", marginLeft: "15px" }}>Edit collection</H2>
      </Row>

      <LoadingButton
        IsLoading={false}
        onClick={() => ""}
        ButtonName='SAVE'
        Style={{ background: "none", padding: "0", fontSize: "0.8rem" }}
      />
    </OptionsWindowWrapper>
  )
}
