import React from 'react'
import { CollectionsCardWrapper } from '../../../Collections/styled/CollectionsCardWrapper.styled'
import { Wrapper } from '../../../../Components/shared/Wrapper'
import { ProfileUserDescription } from '../../../../Components/common/ProfileUserDecription.styled'
import { Colors } from '../../../../assets/Colors'
import { AddCollectionCard } from '../AddCollectionCard'

interface Props {
    UserName: string
    IsForProfile: boolean
    CollectionsCards: []
}
export const AddCollection = (props: Props) => {
    return (
        <Wrapper style={{ justifyContent: "flex-start", padding: "10px", position: "static", borderTop: `4px solid ${Colors.Primary.SoftGray}` }}>

            <ProfileUserDescription style={{ color: Colors.Secoundry.gray, width: "fit-content" }}>{props.IsForProfile ? `YOUR INTERESTS` : `${props.UserName.toLocaleUpperCase()} INTERESTS`}</ProfileUserDescription>

            <CollectionsCardWrapper>
                {
                    props.IsForProfile ?
                        <AddCollectionCard />
                        : null
                }
            </CollectionsCardWrapper>
        </Wrapper>

    )
}
