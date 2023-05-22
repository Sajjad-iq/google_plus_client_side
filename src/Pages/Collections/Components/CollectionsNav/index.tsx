import { Row } from '../../../../Components/shared/Row.styled'
import { UnderLineButton } from '../../styled/UnderLineButton.styled'

interface Props {
    SelectedButton: number
    setSelectedButton: any
    buttonsNames: string[]
    color: string
}
export const CollectionsNav = (props: Props) => {


    return (
        <Row width='100%' align='space-around' padding='0' style={{ background: "white" }}>

            {props.buttonsNames.map((e, i) => {
                return <UnderLineButton
                    IsActive={props.SelectedButton === i}
                    onClick={() => props.setSelectedButton(i)}
                    key={e}
                    color={props.color}

                >{e}</UnderLineButton>
            })}
        </Row>
    )
}
