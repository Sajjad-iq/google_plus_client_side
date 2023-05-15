import { CollectionsCardWrapper } from '../../../Collections/styled/CollectionsCardWrapper.styled'
import { ProfileUserDescription } from '../../../../Components/common/ProfileUserDecription.styled'
import { Colors } from '../../../../assets/Colors'
import { AddCollectionCard } from '../AddCollectionCard'
import { Wrapper } from '../../styled/Wrapper'
import { CollectionSingleCard } from '../../../Collections/Components/CollectionSingleCard'

interface Props {
    UserName: string
    IsForOthersProfiles: boolean
    CollectionsCards: any
}
export const AddCollection = (props: Props) => {
    return (
        <Wrapper >

            <ProfileUserDescription style={{ color: Colors.Secoundry.gray, width: "fit-content" }}>{!props.IsForOthersProfiles ? `YOUR INTERESTS` : `${props.UserName.toLocaleUpperCase()} INTERESTS`}</ProfileUserDescription>

            <CollectionsCardWrapper>

                {
                    props.CollectionsCards.map((e: any) => {
                        return e._id !== "" ? <CollectionSingleCard
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
                    props.IsForOthersProfiles || props.CollectionsCards.length >= 5 ?
                        null
                        :
                        <AddCollectionCard />
                }
            </CollectionsCardWrapper>
        </Wrapper>

    )
}
