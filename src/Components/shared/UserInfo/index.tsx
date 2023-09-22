import { useTranslation } from 'react-i18next'
import { ProfileFollowers } from '../../common/ProfileFollowers.styled'
import { ProfileUserDescription } from '../../common/ProfileUserDecription.styled'
import { ProfileUserName } from '../../common/ProfileUserName.styled'
import { Column } from '../Column.styled'
import { LoadingButton } from '../LoadingButton'

interface Props {
    UserName: string
    UserDescription: string
    UserFollowers: string
    ProfileButtonName: any
    ProfileButtonClick: any
    IsLoading: boolean
    forCollectionsPage: boolean
    color: string
}

export const UserInfo = (props: Props) => {

    const { t } = useTranslation()

    return (
        props.forCollectionsPage ?
            <Column width='100%' padding='60px 0' align='center' style={{ marginBottom: "4px", backgroundColor: props.color }}>
                <ProfileUserDescription style={{ color: 'white' }}>{props.UserName}</ProfileUserDescription>
                <ProfileUserName style={{ color: 'white', marginTop: "25px" }}>{props.UserDescription}</ProfileUserName>
                <ProfileFollowers style={{ color: 'white', marginTop: "10px" }}>{`${props.UserFollowers} ${t("Followers")}`}</ProfileFollowers>
                <LoadingButton Style={{ color: 'white', background: "none", border: "1px solid white", padding: "10px 20px", marginTop: "15px" }} onClick={props.ProfileButtonClick} ButtonName={props.ProfileButtonName} IsLoading={props.IsLoading} />
            </Column>
            :
            <Column width='100%' padding='75px 0' align='center' style={{ marginBottom: "4px", backgroundColor: "white" }}>
                <ProfileUserName>{props.UserName}</ProfileUserName>
                <ProfileUserDescription>{props.UserDescription}</ProfileUserDescription>
                <ProfileFollowers>{`${props.UserFollowers} ${t("Followers")}`}</ProfileFollowers>
                <LoadingButton Style={{}} onClick={props.ProfileButtonClick} ButtonName={props.ProfileButtonName} IsLoading={props.IsLoading} />
            </Column>
    )
}
