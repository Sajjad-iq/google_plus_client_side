import { Wrapper } from "../../Components/shared/Wrapper"
import { CoverImages } from "../../Components/shared/CoverImages"
import CoverIMG from "../../assets/ICONS/Photos/marguerite-729510__340.webp"
import UserIMG from "../../assets/ICONS/ProfileImg.jpg"
import { UserInfo } from "../../Components/shared/UserInfo"
import { Posts } from "../../Components/shared/Posts"
import { useNavigate } from "react-router-dom"
import { PreviewThePost } from "../../services/PostsServices/PreviewThePost"
import { useEffect, useRef, useState } from "react"
import { UserData } from "../../services/LocalStorage/UserData"
import { useObserver } from "../../services/observer/useObserver"
import { FetchPostsHandler } from "../../services/PostsServices/FetchPosts"
import { RedPenButton } from "../Home/Components/RedPenButton"
import { AddCollection } from "./components/AddCollection"
import { FetchCollections } from "../../services/Collections/FetchCollections"
import { Colors } from "../../assets/Colors"
import { DropDownOptionsBottom } from "../../Components/shared/DropDownOptions"
import { OptionsButton } from "../../Components/shared/DropDownOptions/styled/OptionsButton.styled"
import { useTranslation } from "react-i18next"


function Profile() {

    const { onClickOnPost } = PreviewThePost()
    const Navigate = useNavigate()
    const User = UserData()
    const [PostsCount, setPostsCount] = useState(0)
    const BottomRef = useRef<any>()
    const { FetchPosts, StopFetching, Loading, Response } = FetchPostsHandler(PostsCount, { PostOwnerId: User._id })
    const { FetchCollectionsHandler, CollectionsResponse } = FetchCollections({ CollectionOwnerId: User._id }, 2)
    const { t } = useTranslation()

    const observer = useObserver(BottomRef, () => !Loading && !StopFetching ? setPostsCount(PostsCount + 5) : null, Loading)

    useEffect(() => {
        FetchPosts()
    }, [PostsCount])

    useEffect(() => {
        FetchCollectionsHandler()
    }, [])




    return (
        <Wrapper style={window.innerWidth < 768 ? { position: "fixed", top: "0", bottom: '0', overflow: "scroll", zIndex: "20", background: Colors.Primary.Lightgray } : {}}>

            <DropDownOptionsBottom
                for={"profile"}
                bottom="-40px"
                children={
                    <OptionsButton >{t("ProfileUrl")}</OptionsButton>
                }
            />
            <RedPenButton />

            <CoverImages CoverImg={User.CoverPicture !== "" ? User.CoverPicture : CoverIMG} UserImg={User.ProfilePicture !== "" ? User.ProfilePicture : UserIMG} />
            <UserInfo
                color='white'
                forCollectionsPage={false}
                IsLoading={false}
                UserName={`${User.UserName} ${User.FamilyName}`}
                UserDescription={User.Description}
                UserFollowers={User.Followers.length || "0"}
                ProfileButtonClick={() => Navigate("/Settings")}
                ProfileButtonName={t("post_edit")}
            />
            <AddCollection
                UserName=""
                IsForOthersProfiles={false}
                CollectionsCards={CollectionsResponse}
            />
            <Posts
                IsForProfile={true}
                Loading={Loading}
                Response={Response}
                OnClickOnPost={onClickOnPost}
            />

            <div key={"ProfileBottom"} style={{ width: "100%", height: "1px", display: Response.length >= 1 ? "flex" : "none" }} ref={BottomRef}></div>
        </Wrapper>
    )
}

export default Profile