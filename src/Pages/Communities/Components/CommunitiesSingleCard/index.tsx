
import { UserName } from '../../../../Components/common/UserName.styled'
import { CommentBody } from '../../../../Components/shared/SingleCommint/styled/CommentBody.styled'
import { Wrapper } from '../../../../Components/shared/Wrapper'
import { LoadingButton } from '../../../../Components/shared/LoadingButton'
import { Colors } from '../../../../assets/Colors'
import CoverPicture from '../../../../assets/ICONS/Photos/marguerite-729510__340.svg'
import UserImage from '../../../../assets/ICONS/ProfileImg.jpg'
import { UserData } from '../../../../services/LocalStorage/UserData'
import { CardWrapper } from '../../../Collections/styled/CardWrapper.styled'
import { CollectionsUserImage } from '../../../Collections/styled/CollectionsUserImage.styled'
import { CoverImage } from '../../../Collections/styled/CoverImage.styled'

interface Props {
    CollationName: string
    CollationCoverImage: string
    CollationUserImage: string
    CollationOwnerName: string
    Color: string
    OwnerId: string
    IsForProfile: boolean
    Followers: any
    onClick: any
}

export const CommunitiesSingleCard = (props: Props) => {

    const User = UserData()

    return (
        <CardWrapper onClick={props.onClick}>
            <CoverImage src={props.CollationCoverImage || CoverPicture} alt='Collections image' />

            <Wrapper style={{ background: "white", padding: "0 10px 0 10px", height: "55%", justifyContent: "space-between", borderRadius: "0px 0px 4px 4px" }}>

                <CollectionsUserImage src={props.CollationUserImage || UserImage} alt='Collections user image' />

                <Wrapper style={{ background: "none", flexDirection: "column", alignItems: "start" }}>
                    <UserName style={{ margin: "5px 0", color: Colors.Primary.Black }} IsCommentUserName={true}
                    >{props.CollationName}
                    </UserName>
                    <CommentBody style={{ color: Colors.Primary.Black }}>{props.CollationOwnerName}</CommentBody>
                </Wrapper>

                {
                    !props.IsForProfile || props.OwnerId === User._id ?
                        <LoadingButton
                            IsLoading={false}
                            onClick={() => ""}
                            ButtonName='Edit'
                            Style={{ background: "none", padding: "0", fontSize: "0.9rem", color: "green" }}
                        />
                        :
                        <LoadingButton
                            IsLoading={false}
                            onClick={() => ""}
                            ButtonName={props.Followers.includes(User._id) ? "UN JOIN" : "JOIN"}
                            Style={{ background: "none", padding: "0", fontSize: "0.9rem", color: "green" }}
                        />
                }

            </Wrapper>
        </CardWrapper>
    )
}
