import React, { useContext, useEffect, useRef, useState } from 'react'
import { CoverImages } from '../../../../Components/shared/CoverImages'
import { Posts } from '../../../../Components/shared/Posts'
import { UserInfo } from '../../../../Components/shared/UserInfo'
import { GlobalContext } from '../../../../Context/GlobalContext'
import { AddOrRemoveFollow } from '../../../../services/PeopleServices/AddOrRemoveFollow'
import { PreviewThePost } from '../../../../services/PostsServices/PreviewThePost'
import CoverIMG from "../../../../assets/ICONS/Photos/marguerite-729510__340.jpg"
import UserIMG from "../../../../assets/ICONS/ProfileImg.jpg"
import { UserData } from '../../../../services/LocalStorage/UserData'
import { LoadingAnimation } from '../../../../Components/shared/LoadingAnimation'
import { Row } from '../../../../Components/shared/Row.styled'
import { useObserver } from '../../../../services/observer/useObserver'
import { FetchPostsHandler } from '../../../../services/PostsServices/FetchPosts'
import { Wrapper } from '../../../../Components/shared/Wrapper'
import { AddCollection } from '../../../Profile/components/AddCollection'
import { FetchCollections } from '../../../../services/Collections/FetchCollections'
import { BorderButton } from '../../../../Components/common/BorderButton.styled'
import { DropDownOptionsBottom } from '../../../../Components/shared/DropDownOptions'


export const PeopleProfile = () => {

    const User = UserData()
    let { PeopleUser } = useContext(GlobalContext)
    const [PostsCount, setPostsCount] = useState(0)
    const { onClickOnPost } = PreviewThePost()
    const { FetchPosts, StopFetching, Loading, Response } = FetchPostsHandler(PostsCount, { PostOwnerId: PeopleUser._id })
    const BottomRef = useRef<any>()
    const observer = useObserver(BottomRef, () => !Loading && !StopFetching ? setPostsCount(PostsCount + 5) : null, Loading)
    const { AddOrRemoveFollowHandler, IsLoading } = AddOrRemoveFollow()
    const { FetchCollectionsHandler, CollectionsResponse } = FetchCollections({ CollectionOwnerId: PeopleUser._id }, 2)


    useEffect(() => {
        FetchPosts()
    }, [PostsCount])

    useEffect(() => {
        FetchCollectionsHandler()
    }, [])


    return (
        <Wrapper style={window.innerWidth < 768 ? { position: "fixed", top: "0", bottom: '0', overflow: "scroll", zIndex: "20" } : {}}>

            <DropDownOptionsBottom
                bottom="-40px"
                children={
                    <Wrapper>
                        <BorderButton >Profile URL</BorderButton>
                    </Wrapper>
                }
            />            <CoverImages CoverImg={PeopleUser.CoverPicture !== "" ? PeopleUser.CoverPicture : CoverIMG} UserImg={PeopleUser.ProfilePicture !== "" ? PeopleUser.ProfilePicture : UserIMG} />
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

            <Row style={{ display: Loading && Response.length > 1 ? "flex" : "none", background: "none" }} width='100%' padding='30px' align='center' >
                <LoadingAnimation />
            </Row>

            <div key={"PeoplePageBottom"} style={{ width: "100%", height: "1px", display: Loading ? "none" : "flex" }} ref={BottomRef}></div>
        </Wrapper>
    )
}
