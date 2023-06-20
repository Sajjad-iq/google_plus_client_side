import { useNavigate } from 'react-router-dom'
import { H2 } from '../../../../Components/common/H1.styled'
import { BackButton } from '../../../../Components/shared/BackButton'
import { LoadingButton } from '../../../../Components/shared/LoadingButton'
import { Row } from '../../../../Components/shared/Row.styled'
import { CollectionsNavWrapper } from '../../styled/CollectionsNavWrapper'

interface Props {
  onSubmit: any
  loading: boolean
  Header: string
}
export const CollectionNav = (props: Props) => {

  const Navigate = useNavigate()

  return (
    <CollectionsNavWrapper >

      <Row width='fit-content' padding='0' align='center' style={{ background: "transparent" }}>
        <BackButton onClick={() => Navigate("/")} color={"white"} />
        <H2 style={{ fontSize: "0.9rem", color: "white", marginLeft: "15px" }}>{props.Header}</H2>
      </Row>

      <LoadingButton
        IsLoading={props.loading}
        onClick={props.onSubmit}
        ButtonName='SAVE'
        Style={{ background: "none", padding: "0", fontSize: "0.8rem" }}
      />
    </CollectionsNavWrapper>
  )
}
