import axios from 'axios'
import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';

export const AddPost = () => {

    let User = UserData()
    const [Url, setUrl] = useState("")
    const [Photo, setPhoto] = useState<any>("")
    const [Textfield, setTextFelid] = useState<string>("")
    const [isLoading, setIsLoading] = useState(false)
    const { setOptionsValue, OptionsValue, SpecificCollection } = useContext(GlobalContext)

    const Navigate = useNavigate()
    const TextChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFelid(e.target.value)

    const AddPostHandler = async () => {

        if (Textfield !== "") {

            try {
                setIsLoading(true)
                await axios({
                    method: 'post',
                    url: import.meta.env.VITE_BACKEND_URL + "/api/Posts",
                    data: {
                        PostBody: Textfield,
                        PostOwnerId: User._id,
                        PostOwnerName: `${User.UserName} ${User.FamilyName}`,
                        PostOwnerImage: User.ProfilePicture,
                        link: Url,
                        PostImage: Photo,
                        PostFrom: OptionsValue,
                        CollectionName: OptionsValue === "Collections" ? SpecificCollection.CollectionTitle : '',
                        CollectionId: OptionsValue === "Collections" ? SpecificCollection._id : '',
                        CollectionOwnerId: OptionsValue === "Collections" ? SpecificCollection.CollectionOwnerId : '',
                        PrivateShareUsersIds: OptionsValue === "Private" ? [] : [],
                    },
                    headers: {
                    },
                    withCredentials: true

                }
                ).then(() => {
                    Navigate("/")
                    setIsLoading(false)
                })

            } catch (e: any) {
                window.alert("something went wrong")
            } finally {
                setIsLoading(false)
                setOptionsValue("Public")
            }
        } else {
            window.alert("you can't post empty posts")
        }
    }

    return { AddPostHandler, Photo, setPhoto, TextChange, Textfield, Url, setUrl, isLoading, setIsLoading }
}



