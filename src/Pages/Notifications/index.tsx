import React, { useEffect } from 'react'
import { LoadingAnimation } from '../../Components/shared/LoadingAnimation'
import { NotificationsCard } from '../../Components/shared/NotificationsCard'
import { Row } from '../../Components/shared/Row.styled'
import { FetchNotifications } from '../../services/NotificationsService/FetchNotifications'
import { onClickOnNotificationCard } from '../../services/NotificationsService/onClickOnNotificationCard'
import { Wrapper } from '../People/Components/PeopleList/styled/Wrapper'

export const Notifications = () => {

    const { FetchHandler, Response, Loading } = FetchNotifications()
    const { ClickOnNotificationCardHandler, NotificationsLoading } = onClickOnNotificationCard()
    useEffect(() => {
        FetchHandler()

    }, [])

    return (
        <Wrapper>
            {
                Loading || NotificationsLoading ?
                    <Row width='100%' align='center' padding='30px'>
                        <LoadingAnimation />
                    </Row>
                    :
                    Response.map((e: any, i: number) => {
                        return <NotificationsCard onClick={() => ClickOnNotificationCardHandler(e)} CreatedAt={e.createdAt} key={i} UserImg={e.NotificationOwnerImage} UserName={e.NotificationName} NotificationMessage={e.NotificationBody} />
                    })
            }
        </Wrapper>
    )
}
