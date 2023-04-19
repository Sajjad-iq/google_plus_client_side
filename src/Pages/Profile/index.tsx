import { Wrapper } from "../../Components/shared/Wrapper"
import { CoverImages } from "../../Components/shared/CoverImages"
import CoverIMG from "../../assets/ICONS/Photos/marguerite-729510__340.jpg"
import UserIMG from "../../assets/ICONS/ProfileImg.jpg"
import { UserInfo } from "../../Components/shared/UserInfo"
import { Posts } from "../../Components/shared/Posts"
import { useNavigate } from "react-router-dom"
import { PreviewThePost } from "../../services/PostsServices/PreviewThePost"
import { useEffect, useRef, useState } from "react"
import { UserData } from "../../services/LocalStorage/UserData"
import { useObserver } from "../../services/observer/useObserver"
import { LoadingAnimation } from "../../Components/shared/LoadingAnimation"
import { Row } from "../../Components/shared/Row.styled"
import { FetchPostsHandler } from "../../services/PostsServices/FetchPosts"
import { RedPenButton } from "../Home/Components/RedPenButton"


function Profile() {

    const { onClickOnPost } = PreviewThePost()
    const Navigate = useNavigate()
    const User = UserData()
    const [PostsCount, setPostsCount] = useState(0)
    const BottomRef = useRef<any>()
    const { FetchPosts, StopFetching, Loading, Response } = FetchPostsHandler(PostsCount, { PostOwnerId: User._id })

    const observer = useObserver(BottomRef, () => !Loading && !StopFetching ? setPostsCount(PostsCount + 10) : null, Loading)

    useEffect(() => {
        FetchPosts()
    }, [PostsCount])


    return (
        <Wrapper>
            <RedPenButton />
            <CoverImages CoverImg={User.CoverPicture !== "" ? User.CoverPicture : CoverIMG} UserImg={User.ProfilePicture !== "" ? User.ProfilePicture : UserIMG} />
            <UserInfo
                IsLoading={false}
                UserName={`${User.UserName} ${User.FamilyName}`}
                UserDescription={User.Description}
                UserFollowers={User.Followers.length || "0"}
                ProfileButtonClick={() => Navigate("/Settings")}
                ProfileButtonName={"Edit Profile"}
            />
            <Posts
                IsForProfile={true}
                Loading={Loading}
                Response={Response}
                OnClickOnPost={onClickOnPost}
            />

            <Row style={{ display: Loading ? "flex" : "none" }} width='100%' padding='50px' align='center' >
                <LoadingAnimation />
            </Row>

            <div key={"ProfileBottom"} style={{ width: "100%", height: "1px", display: Response.length >= 1 ? "flex" : "none" }} ref={BottomRef}></div>
        </Wrapper>
    )
}

export default Profile