import { FetchPostsHandler } from "../../services/PostsServices/FetchPosts"
import { useEffect, useRef, useState } from "react"
import { Posts } from "../../Components/shared/Posts"
import { PreviewThePost } from "../../services/PostsServices/PreviewThePost"
import { LoadingAnimation } from "../../Components/shared/LoadingAnimation"
import { Row } from "../../Components/shared/Row.styled"
import { useObserver } from "../../services/observer/useObserver"
import { Wrapper } from "./styled/Wrapper"


export const Home = () => {


    const [PostsCount, setPostsCount] = useState(0)
    const { onClickOnPost } = PreviewThePost()
    const { FetchPosts, StopFetching, Loading, Response } = FetchPostsHandler(PostsCount, {})
    const BottomRef = useRef<any>()
    const observer = useObserver(BottomRef, () => !Loading && !StopFetching ? setPostsCount(PostsCount + 10) : null, Loading)

    useEffect(() => {
        FetchPosts()
    }, [PostsCount])

    return (
        <Wrapper>
            <Posts
                Loading={Loading}
                IsForProfile={false}
                Response={Response}
                OnClickOnPost={onClickOnPost}
            />
            <Row style={{ display: Loading ? "flex" : "none" }} width='100%' padding='50px' align='center' >
                <LoadingAnimation />
            </Row>

            <div key={"bottom"} style={{ width: "100%", height: "1px" }} ref={BottomRef}></div>
        </Wrapper>

    )
}
