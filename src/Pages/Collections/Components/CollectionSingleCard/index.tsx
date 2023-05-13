import React from 'react'
import { CardWrapper } from '../../styled/CardWrapper.styled'
import { CoverImage } from '../../styled/CoverImage.styled'
import { CollectionsUserImage } from '../../styled/CollectionsUserImage.styled'
import { UserName } from '../../../../Components/common/UserName.styled'
import { CommentBody } from '../../../../Components/shared/SingleCommint/styled/CommentBody.styled'
import { Wrapper } from '../../../../Components/shared/Wrapper'
import { LoadingButton } from '../../../../Components/shared/LoadingButton'
import { Colors } from '../../../../assets/Colors'

interface Props {
    CollationName: string
    CollationCoverImage: string
    CollationUserImage: string
    CollationDescription: string
}

export const CollectionSingleCard = (props: Props) => {
    return (
        <CardWrapper>
            <CoverImage src={props.CollationCoverImage} alt='Collections image' />

            <Wrapper style={{ background: "pink", padding: "0 10px 10px 10px", height: "60%", justifyContent: "space-between", borderRadius: "0px 0px 4px 4px" }}>

                <CollectionsUserImage src={props.CollationUserImage} alt='Collections user image' />

                <Wrapper style={{ background: "none", flexDirection: "column", alignItems: "start" }}>
                    <UserName style={{ margin: "5px 0", color: Colors.Primary.white }} IsCommentUserName={true}
                    >{props.CollationName}</UserName>
                    <CommentBody style={{ color: Colors.Primary.SoftGray }}>{props.CollationDescription}</CommentBody>
                </Wrapper>

                <LoadingButton
                    IsLoading={false}
                    onClick={() => ""}
                    ButtonName='FOLLOW'
                    Style={{ background: "none", padding: "0", fontSize: "0.8rem" }}
                />
            </Wrapper>
        </CardWrapper>
    )
}
