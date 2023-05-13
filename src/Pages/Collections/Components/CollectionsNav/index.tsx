import React, { useState } from 'react'
import { Row } from '../../../../Components/shared/Row.styled'
import { Colors } from '../../../../assets/Colors'
import { UnderLineButton } from '../../styled/UnderLineButton.styled'
import { buttonsNames } from '../names'

export const CollectionsNav = () => {

    const [SelectedButton, setSelectedButton] = useState(0)

    return (
        <Row width='100%' align='space-around' padding='0' style={{ background: Colors.Primary.red }}>

            {buttonsNames.map((e, i) => {
                return <UnderLineButton
                    IsActive={SelectedButton === i}
                    onClick={() => setSelectedButton(i)}
                    key={e}
                >{e}</UnderLineButton>
            })}
        </Row>
    )
}
