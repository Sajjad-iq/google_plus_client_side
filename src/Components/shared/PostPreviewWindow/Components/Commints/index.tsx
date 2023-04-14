import { useContext, useEffect, useRef, useState } from 'react'
import Image from '../../../../../assets/ICONS/ProfileImg.jpg'
import { GlobalContext } from '../../../../../Context/GlobalContext'
import { UserData } from '../../../../../services/LocalStorage/UserData'
import { useObserver } from '../../../../../services/observer/useObserver'
import { SetFindUser } from '../../../../../services/PeopleServices/SetFindUser'
import { FetchComments } from '../../../../../services/PostsServices/FetchComments'
import { LoadingAnimation } from '../../../LoadingAnimation'
import { Row } from '../../../Row.styled'
import { SingleComment } from '../../../SingleCommint'
import { Column } from './Column.styled'



export const PostComments = () => {

    const BottomRef = useRef<any>(null)
    const [PostsCount, setPostsCount] = useState(0)
    const { FetchCommentsHandler, StopFetching, Loading } = FetchComments(PostsCount)
    const { SetFindUserHandler } = SetFindUser()
    const observer = useObserver(BottomRef, () => !Loading && !StopFetching ? setPostsCount(PostsCount + 10) : null, Loading)
    const { SpecificPostComments } = useContext(GlobalContext)

    useEffect(() => {
        FetchCommentsHandler()
    }, [PostsCount])


    return (
        <Column width='100%' align='center' padding='unset'>

            {
                SpecificPostComments.map((e: any, i: number) => {
                    return <SingleComment
                        onClickOnLogo={() => SetFindUserHandler(e.CommentOwnerId)}
                        CreatedAt={e.createdAt}
                        key={i}
                        UserImage={e.CommentOwnerImage !== "" ? e.CommentOwnerImage : Image}
                        UserName={e.CommentOwnerName}
                        CommentBody={e.CommentBody}
                    />
                })}


            <Row style={{ display: Loading ? "flex" : "none" }} width='100%' padding='50px' align='center' >
                <LoadingAnimation />
            </Row>

            <div key={"bottom"} style={{ width: "100%", height: "1px" }} ref={BottomRef}></div>
        </Column>
    )
}
