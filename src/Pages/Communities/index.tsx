import { CollectionsCardWrapper } from '../Collections/styled/CollectionsCardWrapper.styled'
import { Colors } from '../../assets/Colors'
import { Wrapper } from '../../Components/shared/Wrapper'
import userImg from '../../assets/ICONS/ProfileImg.jpg'
import Cover from '../../assets/ICONS/Photos/marguerite-729510__340.webp'
import { CommunitiesSingleCard } from './Components/CommunitiesSingleCard'


export const Communities = () => {

    return (
        <Wrapper style={{ height: "100%", alignContent: "flex-start" }}>

            <CollectionsCardWrapper >

                <CommunitiesSingleCard
                    onClick={() => {

                    }}
                    CollationCoverImage={Cover}
                    CollationOwnerName={`1,300 members`}
                    CollationName={"Apple"}
                    CollationUserImage={userImg}
                    key={1}
                    Color={Colors.Secoundry.Green}
                    OwnerId={""}
                    IsForProfile={true}
                    Followers={[]}
                />

                <CommunitiesSingleCard
                    onClick={() => {

                    }}
                    CollationCoverImage={Cover}
                    CollationOwnerName={`1,300 members`}
                    CollationName={"Apple"}
                    CollationUserImage={userImg}
                    key={2}
                    Color={"gray"}
                    OwnerId={""}
                    IsForProfile={true}
                    Followers={[]}
                />

                <CommunitiesSingleCard
                    onClick={() => {

                    }}
                    CollationCoverImage={Cover}
                    CollationOwnerName={`1,300 members`}
                    CollationName={"Apple"}
                    CollationUserImage={userImg}
                    key={3}
                    Color={"gray"}
                    OwnerId={""}
                    IsForProfile={true}
                    Followers={[]}
                />

                <CommunitiesSingleCard
                    onClick={() => {

                    }}
                    CollationCoverImage={Cover}
                    CollationOwnerName={`1,300 members`}
                    CollationName={"Apple"}
                    CollationUserImage={userImg}
                    key={4}
                    Color={"gray"}
                    OwnerId={""}
                    IsForProfile={true}
                    Followers={[]}
                />




            </CollectionsCardWrapper>
        </Wrapper>

    )
}



export default Communities
