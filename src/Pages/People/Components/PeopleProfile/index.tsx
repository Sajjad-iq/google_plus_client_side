import { useContext, useEffect, useRef, useState } from 'react'
import { CoverImages } from '../../../../Components/shared/CoverImages'
import { Posts } from '../../../../Components/shared/Posts'
import { UserInfo } from '../../../../Components/shared/UserInfo'
import { GlobalContext } from '../../../../Context/GlobalContext'
import { AddOrRemoveFollow } from '../../../../services/PeopleServices/AddOrRemoveFollow'
import { PreviewThePost } from '../../../../services/PostsServices/PreviewThePost'
import CoverIMG from "../../../../assets/ICONS/Photos/marguerite-729510__340.webp"
import UserIMG from "../../../../assets/ICONS/ProfileImg.jpg"
import { useObserver } from '../../../../services/observer/useObserver'
import { FetchPostsHandler } from '../../../../services/PostsServices/FetchPosts'
import { Wrapper } from '../../../../Components/shared/Wrapper'
import { AddCollection } from '../../../Profile/components/AddCollection'
import { FetchCollections } from '../../../../services/Collections/FetchCollections'
import { DropDownOptionsBottom } from '../../../../Components/shared/DropDownOptions'
import { BlockUser } from '../../../../services/PeopleServices/BlockUser'
import { OptionsButton } from '../../../../Components/shared/DropDownOptions/styled/OptionsButton.styled'


export const PeopleProfile = () => {

    let { PeopleUser, User } = useContext(GlobalContext)
    const [PostsCount, setPostsCount] = useState(0)
    const { onClickOnPost } = PreviewThePost()
    const { FetchPosts, StopFetching, Loading, Response } = FetchPostsHandler(PostsCount, { PostOwnerId: PeopleUser._id })
    const BottomRef = useRef<any>()
    const observer = useObserver(BottomRef, () => !Loading && !StopFetching ? setPostsCount(PostsCount + 5) : null, Loading)
    const { AddOrRemoveFollowHandler, IsLoading } = AddOrRemoveFollow()
    const { FetchCollectionsHandler, CollectionsResponse } = FetchCollections({ CollectionOwnerId: PeopleUser._id }, 2)
    const { BlockUserHandler } = BlockUser()
    let blacklist = User.BlockedAccounts || []

    useEffect(() => {
        FetchPosts()
    }, [PostsCount])

    useEffect(() => {
        FetchCollectionsHandler()
    }, [])


    return (
        <Wrapper style={window.innerWidth < 768 ? { position: "fixed", top: "0", bottom: '0', overflow: "scroll", zIndex: "20" } : {}}>

            <DropDownOptionsBottom
                for={"profile"}
                bottom="-40px"
                children={
                    <Wrapper>
                        <OptionsButton onClick={() => BlockUserHandler(PeopleUser._id)}>{blacklist.includes(PeopleUser._id) ? "UnBlock" : "Block"}</OptionsButton>
                    </Wrapper>
                }
            />
            <CoverImages CoverImg={PeopleUser.CoverPicture !== "" ? PeopleUser.CoverPicture : CoverIMG} UserImg={PeopleUser.ProfilePicture !== "" ? PeopleUser.ProfilePicture : UserIMG} />
            <UserInfo
                color='white'
                forCollectionsPage={false}
                IsLoading={IsLoading}
                UserName={`${PeopleUser.UserName} ${PeopleUser.FamilyName}`}
                UserDescription={PeopleUser.Description}
                UserFollowers={PeopleUser.Followers.length || "0"}
                ProfileButtonClick={AddOrRemoveFollowHandler}
                ProfileButtonName={PeopleUser.Followers.includes(User._id) ? "UnFollow" : "Follow"}
            />
            <AddCollection
                UserName={PeopleUser.UserName}
                IsForOthersProfiles={true}
                CollectionsCards={CollectionsResponse}
            />
            <Posts
                IsForProfile={true}
                Loading={Loading}
                Response={Response}
                OnClickOnPost={onClickOnPost}
            />

            <div key={"PeoplePageBottom"} style={{ width: "100%", height: "1px", display: Loading ? "none" : "flex" }} ref={BottomRef}></div>
        </Wrapper>
    )
}


export default PeopleProfile
