import { CardWrapper } from '../../styled/CardWrapper.styled'
import { CoverImage } from '../../styled/CoverImage.styled'
import { CollectionsUserImage } from '../../styled/CollectionsUserImage.styled'
import { UserName } from '../../../../Components/common/UserName.styled'
import { CommentBody } from '../../../../Components/shared/SingleCommint/styled/CommentBody.styled'
import { Wrapper } from '../../../../Components/shared/Wrapper'
import { LoadingButton } from '../../../../Components/shared/LoadingButton'
import { Colors } from '../../../../assets/Colors'
import CoverPicture from '../../../../assets/ICONS/Photos/marguerite-729510__340.svg'
import UserImage from '../../../../assets/ICONS/ProfileImg.jpg'
import { UserData } from '../../../../services/LocalStorage/UserData'

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

export const CollectionSingleCard = (props: Props) => {

    const User = UserData()

    return (
        <CardWrapper onClick={props.onClick}>
            <CoverImage src={props.CollationCoverImage || CoverPicture} alt='Collections image' />

            <Wrapper style={{ background: props.Color, padding: "0 10px 0 10px", height: "55%", justifyContent: "space-between", borderRadius: "0px 0px 2px 2px" }}>

                <CollectionsUserImage src={props.CollationUserImage || UserImage} alt='Collections user image' />

                <Wrapper style={{ background: "none", flexDirection: "column", alignItems: "start" }}>
                    <UserName style={{ margin: "5px 0", color: Colors.Primary.white }} IsCommentUserName={true}
                    >{props.CollationName}
                    </UserName>
                    <CommentBody style={{ color: Colors.Primary.white }}>{props.CollationOwnerName}</CommentBody>
                </Wrapper>

                {
                    !props.IsForProfile || props.OwnerId === User._id ?
                        <LoadingButton
                            IsLoading={false}
                            onClick={() => ""}
                            ButtonName='Edit'
                            Style={{ background: "none", padding: "0", fontSize: "0.8rem" }}
                        />
                        :
                        <LoadingButton
                            IsLoading={false}
                            onClick={() => ""}
                            ButtonName={props.Followers.includes(User._id) ? "UN FOLLOW" : "FOLLOW"}
                            Style={{ background: "none", padding: "0", fontSize: "0.8rem" }}
                        />
                }

            </Wrapper>
        </CardWrapper>
    )
}
