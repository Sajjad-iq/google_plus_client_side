import React from 'react'
import { ToggleColumn } from '../../../../Components/shared/PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/ToggleColumn.styled'
import { BorderButton } from '../../../../Components/common/BorderButton.styled'

interface Props {
    IsActive: boolean
}
export const OptionsWindow = (props: Props) => {

    return (
        <ToggleColumn bottom={"-40px"} display={props.IsActive ? "flex" : "none"}  >
            <BorderButton isLastOne={false}>Profile URL</BorderButton>
        </ToggleColumn>
    )
}
