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
}
export const UserInfo = (props: Props) => {
    return (
        <Column width='100%' padding='75px 0' align='center' style={{ marginBottom: "4px", backgroundColor: "white" }}>
            <ProfileUserName>{props.UserName}</ProfileUserName>
            <ProfileUserDescription>{props.UserDescription}</ProfileUserDescription>
            <ProfileFollowers>{`${props.UserFollowers} followers`}</ProfileFollowers>
            <LoadingButton Style={{}} onClick={props.ProfileButtonClick} ButtonName={props.ProfileButtonName} IsLoading={props.IsLoading} />
        </Column>
    )
}
