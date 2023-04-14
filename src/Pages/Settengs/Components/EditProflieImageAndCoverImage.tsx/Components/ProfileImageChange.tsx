import React from 'react'
import { UserData } from '../../../../../services/LocalStorage/UserData'
import { ChangeProfileImageHandler } from '../../../../../services/SettingsServices/ChangeProfileImageHandler'
import UserIMG from "../../../../../assets/ICONS/ProfileImg.jpg"
import { ProfileUserImg } from '../styled/ProfileUserImg.styled'
import { InputLabel } from '../../../../../Components/common/InputLabel.styled'

export const ProfileImageChange = () => {

    const User = UserData()
    const { handleFileUpload, Photo } = ChangeProfileImageHandler()

    const DefaultImage = () => {
        if (User.ProfilePicture == "" && Photo == "") {
            return UserIMG
        } else if (User.ProfilePicture !== "" && Photo == "") {
            return User.ProfilePicture
        } else {
            return Photo
        }

    }

    return (
        <InputLabel style={{ position: "absolute", bottom: "-55px" }} onChange={handleFileUpload} htmlFor={"profile user image Change"}>
            <input
                id={"profile user image Change"}
                accept='.jpeg, .png, .jpg'
                style={{ display: "none" }}
                type="file"
            />
            <ProfileUserImg src={DefaultImage()} alt="user image" />

        </InputLabel>
    )
}
