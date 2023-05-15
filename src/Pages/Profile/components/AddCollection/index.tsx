import { CollectionsCardWrapper } from '../../../Collections/styled/CollectionsCardWrapper.styled'
import { ProfileUserDescription } from '../../../../Components/common/ProfileUserDecription.styled'
import { Colors } from '../../../../assets/Colors'
import { AddCollectionCard } from '../AddCollectionCard'
import { Wrapper } from '../../styled/Wrapper'

interface Props {
    UserName: string
    IsForProfile: boolean
    CollectionsCards: []
}
export const AddCollection = (props: Props) => {
    return (
        <Wrapper >

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
