import { useContext, useEffect, useRef, useState } from 'react'
import { useObserver } from '../../../../../services/observer/useObserver'
import { SetFindUser } from '../../../../../services/PeopleServices/SetFindUser'
import { FetchComments } from '../../../../../services/PostsServices/FetchComments'
import { LoadingAnimation } from '../../../LoadingAnimation'
import { Row } from '../../../Row.styled'
import { SingleComment } from '../../../SingleCommint'
import { Column } from '../../../Column.styled'
import { Colors } from '../../../../../assets/Colors'
import { GlobalContext } from '../../../../../Context/GlobalContext'


export const PostComments = () => {

    const { SpecificPostComments, setSpecificPostComments } = useContext(GlobalContext)
    const BottomRef = useRef<any>(null)
    const [PostsCount, setPostsCount] = useState(0)
    const { FetchCommentsHandler, StopFetching, Loading } = FetchComments(PostsCount, setSpecificPostComments, SpecificPostComments)
    const { SetFindUserHandler } = SetFindUser()
    const observer = useObserver(BottomRef, () => !Loading && !StopFetching ? setPostsCount(PostsCount + 10) : null, Loading)

    useEffect(() => {
        FetchCommentsHandler()
    }, [PostsCount])


    return (
        <Column width='100%' align='center' padding='0' style={{ background: Colors.Primary.SoftGray }} >

            {
                SpecificPostComments.map((e: any, i: number) => {
                    if (e._id) return <SingleComment
                        onClickOnLogo={() => SetFindUserHandler(e.CommentOwnerId)}
                        CreatedAt={e.createdAt}
                        key={i}
                        data={e}
                    />
                })
            }

            <Row style={{ display: Loading ? "flex" : "none" }} width='100%' padding='50px' align='center' >
                <LoadingAnimation />
            </Row>

            <div key={"bottom"} style={{ width: "100%", height: "1px" }} ref={BottomRef}></div>
        </Column>
    )
}
