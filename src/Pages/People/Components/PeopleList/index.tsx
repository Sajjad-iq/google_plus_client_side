import React, { useEffect, useRef, useState } from 'react'
import { LoadingAnimation } from '../../../../Components/shared/LoadingAnimation'
import { Row } from '../../../../Components/shared/Row.styled'
import { UserCard } from '../../../../Components/shared/UserCard'
import { useObserver } from '../../../../services/observer/useObserver'
import { FetchAllUsers } from '../../../../services/PeopleServices/FetchAllUsers'
import { SetFindUser } from '../../../../services/PeopleServices/SetFindUser'
import { Header } from './styled/Header.styled'
import { Wrapper } from './styled/Wrapper'

export const PeopleList = () => {


    const [PostsCount, setPostsCount] = useState(0)
    const { FetchAllUsersHandler, StopFetching, Response, Loading } = FetchAllUsers(PostsCount)
    const BottomRef = useRef<any>()
    const observer = useObserver(BottomRef, () => !Loading && !StopFetching ? setPostsCount(PostsCount + 10) : null, Loading)
    const { SetFindUserHandler, FindUserLoading, UserId } = SetFindUser()

    useEffect(() => {
        FetchAllUsersHandler()
    }, [PostsCount])

    return (
        <Wrapper >
            <Header>People you may know..</Header>
            {
                Response.map((e) => {
                    if (e.UserName !== "") {
                        return <UserCard
                            IsLoading={FindUserLoading && e._id === UserId ? true : false}
                            onClick={() => SetFindUserHandler(e._id)} key={e._id}
                            UserName={`${e.UserName} ${e.FamilyName}`}
                            UserImg={e.ProfilePicture}
                            IsForSearch={false} />
                    }
                })
            }

            <Row style={{ display: Loading ? "flex" : "none" }} width='100%' padding='50px' align='center' >
                <LoadingAnimation />
            </Row>

            <div key={"PeoplePageBottom"} style={{ width: "100%", height: "1px", display: Loading ? "none" : "flex" }} ref={BottomRef}></div>

        </Wrapper>
    )
}
