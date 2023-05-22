import { useState } from 'react'
import { CollectionsNav } from '../Collections/Components/CollectionsNav'
import { CollectionsCardWrapper } from '../Collections/styled/CollectionsCardWrapper.styled'
import { CommunitiesButtonsNames } from './Components/CommunitiesButtonsNames'
import { Colors } from '../../assets/Colors'

export const Communities = () => {
    const [SelectedButton, setSelectedButton] = useState(0)

    return (
        <CollectionsCardWrapper >
            <CollectionsNav color={Colors.Secoundry.gray} buttonsNames={CommunitiesButtonsNames} setSelectedButton={setSelectedButton} SelectedButton={SelectedButton} />
        </CollectionsCardWrapper>
    )
}
