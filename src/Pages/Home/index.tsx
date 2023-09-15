import { FetchPostsHandler } from "../../services/PostsServices/FetchPosts"
import { useContext, useEffect, useRef, useState } from "react"
import { Posts } from "../../Components/shared/Posts"
import { PreviewThePost } from "../../services/PostsServices/PreviewThePost"
import { useObserver } from "../../services/observer/useObserver"
import { Wrapper } from "./styled/Wrapper"
import { RedPenButton } from "./Components/RedPenButton"
import { GlobalContext } from "../../Context/GlobalContext"


export const Home = () => {

    const { User } = useContext(GlobalContext)
    const [PostsCount, setPostsCount] = useState(0)
    const { onClickOnPost } = PreviewThePost()
    const { FetchPosts, StopFetching, Loading, Response } = FetchPostsHandler(PostsCount, {})
    const BottomRef = useRef<any>()
    const observer = useObserver(BottomRef, () => !Loading && !StopFetching ? setPostsCount((e: any) => e = e + 5) : null, Loading)



    useEffect(() => {
        User._id !== "" ? FetchPosts() : null
    }, [PostsCount])

    return (
        <Wrapper>
            <RedPenButton />
            <Posts
                Loading={Loading}
                IsForProfile={false}
                Response={Response}
                OnClickOnPost={onClickOnPost}
            />

            <div key={"bottom"} style={{ width: "100%", height: "1px" }} ref={BottomRef}></div>
        </Wrapper>

    )
}


export default Home
