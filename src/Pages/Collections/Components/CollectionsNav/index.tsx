import { useLocation } from 'react-router-dom'
import { Row } from '../../../../Components/shared/Row.styled'
import { UnderLineButton } from '../../styled/UnderLineButton.styled'
import { Colors } from '../../../../assets/Colors'

interface Props {
    SelectedButton: number
    setSelectedButton: any
    buttonsNames: string[]
    color: string
    for: string
}
export const CollectionsNav = (props: Props) => {

    const Location = useLocation()
    function colorSelector() {
        switch (props.for) {
            case "/Collections":
                return Colors.Secoundry.Cyan;
            case "/Communities":
                return Colors.Secoundry.Green;
            default:
                return Colors.Primary.red
        }
    }

    return (
        <Row width='100%' align='space-around' padding='0' style={{ background: colorSelector(), display: Location.pathname === props.for ? "flex" : "none" }}>

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
