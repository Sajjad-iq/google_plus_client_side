import React, { useState } from 'react'
import { Row } from '../../../../Components/shared/Row.styled'
import { Colors } from '../../../../assets/Colors'
import { UnderLineButton } from '../../styled/UnderLineButton.styled'
import { buttonsNames } from '../names'

interface Props {
    SelectedButton: number
    setSelectedButton: any
}
export const CollectionsNav = (props: Props) => {


    return (
        <Row width='100%' align='space-around' padding='0' style={{ background: "white" }}>

            {buttonsNames.map((e, i) => {
                return <UnderLineButton
                    IsActive={props.SelectedButton === i}
                    onClick={() => props.setSelectedButton(i)}
                    key={e}
                >{e}</UnderLineButton>
            })}
        </Row>
    )
}
