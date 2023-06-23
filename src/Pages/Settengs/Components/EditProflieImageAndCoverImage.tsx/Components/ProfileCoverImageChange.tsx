import { InputLabel } from '../../../../../Components/common/InputLabel.styled'
import { UserData } from '../../../../../services/LocalStorage/UserData'
import { ChangeProfileCoverImage } from '../../../../../services/SettingsServices/ChangeProfileCoverImage'
import CoverIMG from "../../../../../assets/ICONS/Photos/marguerite-729510__340.svg"
import { CoverImg } from '../styled/CoverImg.styled'

export const ProfileCoverImageChange = () => {

    const { handleFileUpload, Photo } = ChangeProfileCoverImage()
    const User = UserData()

    const DefaultImage = () => {
        if (User.CoverPicture == "" && Photo == "") {
            return CoverIMG
        } else if (User.CoverPicture !== "" && Photo == "") {
            return User.CoverPicture
        } else {
            return Photo
        }

    }
    return (
        <InputLabel style={{ width: "100%" }} onChange={handleFileUpload} htmlFor={"profile Cover image Change"}>
            <input
                id={"profile Cover image Change"}
                accept='.jpeg, .png, .jpg'
                style={{ display: "none" }}
                type="file"
            />
            <CoverImg src={DefaultImage()} alt='cover image' />

        </InputLabel>
    )
}
