import { useState } from 'react'
import { Column } from '../../../Components/shared/Column.styled'
import { DescriptionTextField } from '../../../Components/shared/DescriptionTextField'
import { SettingsEditSection } from '../../../Components/shared/SettingsEditSection'
import { SettingsSaveChanges } from '../../../Components/shared/SettingsSaveChanges'
import { UserData } from '../../../services/LocalStorage/UserData'
import { ChangeDescriptionHandler } from '../../../services/SettingsServices/ChangeDescriptionHandler'
import { SingleSectionWrapper } from '../styled/SingleSectionWrapper'
import { Article } from '../../../Components/shared/SettingsEditSection/styled/Article.styled'
import { Colors } from '../../../assets/Colors'

export const EditDescription = () => {
    let User = UserData()
    const [isActive, setIsActive] = useState(false)
    const { onSave, OnDescriptionChange } = ChangeDescriptionHandler(setIsActive)

    return (
        <SingleSectionWrapper>
            <SettingsEditSection EditClick={() => setIsActive(!isActive)}
                SettingName={
                    <Article>
                        <Article >Description:</Article>
                        <Article style={{ color: Colors.Secoundry.Cyan, marginLeft: "5px" }}>{User.Description === "" ? "..." : User.Description}</Article>
                    </Article>
                }
            />

            <Column width='100%' padding='0' align='center' style={{ display: isActive ? "flex" : "none" }}>
                <DescriptionTextField
                    IsValidValue={true}
                    onChange={OnDescriptionChange}
                    Rows={3}
                />
                <SettingsSaveChanges
                    OnCloseClick={() => setIsActive(false)}
                    OnSaveClick={onSave}
                />
            </Column>
        </SingleSectionWrapper>
    )
}
