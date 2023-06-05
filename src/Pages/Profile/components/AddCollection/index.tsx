import { CollectionsCardWrapper } from '../../../Collections/styled/CollectionsCardWrapper.styled'
import { ProfileUserDescription } from '../../../../Components/common/ProfileUserDecription.styled'
import { Colors } from '../../../../assets/Colors'
import { AddCollectionCard } from '../AddCollectionCard'
import { Wrapper } from '../../styled/Wrapper'
import { CollectionSingleCard } from '../../../Collections/Components/CollectionSingleCard'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../../../../Context/GlobalContext'

interface Props {
    UserName: string
    IsForOthersProfiles: boolean
    CollectionsCards: any
}
export const AddCollection = (props: Props) => {

    const { setSpecificCollection } = useContext(GlobalContext)
    const Navigate = useNavigate()
    return (
        <Wrapper style={{ padding: "0" }}>

            <ProfileUserDescription style={{ color: Colors.Secoundry.gray, width: "fit-content" }}>{!props.IsForOthersProfiles ? `YOUR INTERESTS` : `${props.UserName.toLocaleUpperCase()} INTERESTS`}</ProfileUserDescription>

            <CollectionsCardWrapper>

                {
                    props.CollectionsCards.map((e: any) => {
                        return e._id !== "" ?
                            <CollectionSingleCard
                                onClick={() => {
                                    Navigate("/CollectionPreview")
                                    setSpecificCollection(e)
                                }}
                                CollationCoverImage={e.CollectionsCoverPicture}
                                CollationOwnerName={e.CollectionOwnerName}
                                CollationName={e.CollectionTitle}
                                CollationUserImage={e.CollectionOwnerImage}
                                key={e._id}
                                Color={e.Color}
                                OwnerId={e.CollectionOwnerId}
                                IsForProfile={true}
                                Followers={e.CollectionFollowing}
                            />
                            :
                            null
                    })
                }

                {
                    props.IsForOthersProfiles || props.CollectionsCards.length >= 4 ?
                        null
                        :
                        <AddCollectionCard />
                }
            </CollectionsCardWrapper>
        </Wrapper>

    )
}
