import { CardWrapper } from '../../styled/CardWrapper.styled'
import { CoverImage } from '../../styled/CoverImage.styled'
import { CollectionsUserImage } from '../../styled/CollectionsUserImage.styled'
import { UserName } from '../../../../Components/common/UserName.styled'
import { CommentBody } from '../../../../Components/shared/SingleCommint/styled/CommentBody.styled'
import { Wrapper } from '../../../../Components/shared/Wrapper'
import { LoadingButton } from '../../../../Components/shared/LoadingButton'
import { Colors } from '../../../../assets/Colors'
import CoverPicture from '../../../../assets/ICONS/Photos/marguerite-729510__340.webp'
import UserImage from '../../../../assets/ICONS/ProfileImg.jpg'
import { UserData } from '../../../../services/LocalStorage/UserData'
import Cookies from 'js-cookie'

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
    const currentLanguageCode = Cookies.get('i18next') || 'ar'

    return (
        <CardWrapper onClick={props.onClick}>
            <CoverImage src={props.CollationCoverImage || CoverPicture} alt='Collections image' />

            <Wrapper style={{ background: props.Color, padding: "0 10px 0 10px", height: "55%", justifyContent: "space-between", borderRadius: "0px 0px 2px 2px" }}>

                <CollectionsUserImage style={{ border: "1px solid white" }} src={props.CollationUserImage || UserImage} alt='Collections user image' />

                <Wrapper style={{ background: "none", flexDirection: "column", alignItems: "start" }}>
                    <UserName style={{ margin: "5px 0", color: Colors.Primary.white }} IsCommentUserName={false}
                    >{props.CollationName}
                    </UserName>
                    <CommentBody style={{ color: Colors.Primary.MediumGray, opacity: 0.8 }}>{props.CollationOwnerName}</CommentBody>
                </Wrapper>

                {
                    !props.IsForProfile || props.OwnerId === User._id ?
                        <LoadingButton
                            IsLoading={false}
                            onClick={() => ""}
                            ButtonName={currentLanguageCode === "ar" ? "تعديل" : 'Edit'}
                            Style={{ background: "none", padding: "0", fontSize: "0.8rem" }}
                        />
                        :
                        <LoadingButton
                            IsLoading={false}
                            onClick={() => ""}
                            ButtonName={props.Followers.includes(User._id) ? currentLanguageCode === "ar" ? "الغاء المتابعة" : "UN FOLLOW" : currentLanguageCode === "ar" ? "متابعة" : "FOLLOW"}
                            Style={{ background: "none", padding: "0", fontSize: "0.8rem" }}
                        />
                }

            </Wrapper>
        </CardWrapper>
    )
}
