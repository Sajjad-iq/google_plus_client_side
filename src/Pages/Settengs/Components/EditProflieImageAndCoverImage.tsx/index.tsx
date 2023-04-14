import React from 'react'
import { CoverImg } from '../../../../Components/common/CoverImg.styled'
import { UserData } from '../../../../services/LocalStorage/UserData'
import { Wrapper } from '../../../Home/styled/Wrapper'
import { ProfileCoverImageChange } from './Components/ProfileCoverImageChange'
import { ProfileImageChange } from './Components/ProfileImageChange'

export const EditProfileImageAndCoverImage = () => {
    const User = UserData()

    return (
        <Wrapper style={{ position: "relative", marginBottom: "60px" }}>
            <ProfileImageChange />
            <ProfileCoverImageChange />
        </Wrapper>
    )
}
