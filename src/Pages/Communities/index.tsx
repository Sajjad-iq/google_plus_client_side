import { useState } from 'react'
import { CollectionsNav } from '../Collections/Components/CollectionsNav'
import { CollectionsCardWrapper } from '../Collections/styled/CollectionsCardWrapper.styled'
import { CommunitiesButtonsNames } from './Components/CommunitiesButtonsNames'
import { Colors } from '../../assets/Colors'
import { Wrapper } from '../../Components/shared/Wrapper'
import userImg from '../../assets/ICONS/ProfileImg.jpg'
import Cover from '../../assets/ICONS/Photos/marguerite-729510__340.jpg'
import { CommunitiesSingleCard } from './Components/CommunitiesSingleCard'


export const Communities = () => {
    const [SelectedButton, setSelectedButton] = useState(0)

    return (
        <Wrapper style={{ height: "100%", alignContent: "flex-start" }}>

            <CollectionsNav color={Colors.Secoundry.Green} buttonsNames={CommunitiesButtonsNames} setSelectedButton={setSelectedButton} SelectedButton={SelectedButton} />

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
                    key={1}
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
                    key={1}
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
                    key={1}
                    Color={"gray"}
                    OwnerId={""}
                    IsForProfile={true}
                    Followers={[]}
                />




            </CollectionsCardWrapper>
        </Wrapper>

    )
}
