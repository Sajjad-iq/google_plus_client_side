import axios from 'axios'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';
import { CollectionsColorsData } from '../../Pages/AddCollection/Components/CollectionColors/CollectionsColorsData';

export const AddCollections = () => {

    let User = UserData()
    const [ColorIndex, setColorIndex] = useState(0)
    const [Title, setTitle] = useState("")
    const [Tagline, setTagline] = useState('')
    const [Image, setImage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const { setErrMessage } = useContext(GlobalContext)
    const Navigate = useNavigate()



    const AddCollectionHandler = async () => {

        if (Title !== "") {
            try {
                setIsLoading(true)
                await axios({
                    method: 'post',
                    url: import.meta.env.VITE_BACKEND_URL + "/api/Collections/AddCollections",
                    headers: {},
                    withCredentials: true,
                    data: {
                        CollectionTitle: Title,
                        CollectionOwnerId: User._id,
                        CollectionOwnerName: `${User.UserName} ${User.FamilyName}`,
                        Tagline: Tagline,
                        CollectionsCoverPicture: Image,
                        Color: CollectionsColorsData[ColorIndex],
                        CollectionOwnerImage: User.ProfilePicture
                    }
                }
                ).then(() => {
                    Navigate("/")
                    setIsLoading(false)
                })
            } catch (e: any) {
                setErrMessage(e.message)
                Navigate("/Error")
            } finally {
                setIsLoading(false)
            }
        } else {
            window.alert("you can't post empty posts")
        }
    }

    return { AddCollectionHandler, ColorIndex, setColorIndex, setTitle, setTagline, Image, setImage, isLoading, setIsLoading }
}



