import axios from 'axios'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';
import { CollectionsColorsData } from '../../Pages/AddCollection/Components/CollectionColors/CollectionsColorsData';

export const EditCollectionService = () => {

    let User = UserData()
    const { SpecificCollection } = useContext(GlobalContext)
    const [ColorIndex, setColorIndex] = useState(0)
    const [Title, setTitle] = useState(SpecificCollection.CollectionTitle)
    const [Tagline, setTagline] = useState(SpecificCollection.Tagline)
    const [Image, setImage] = useState(SpecificCollection.CollectionsCoverPicture)
    const [isLoading, setIsLoading] = useState(false)

    const { setErrMessage } = useContext(GlobalContext)
    const Navigate = useNavigate()



    const EditCollectionHandler = async () => {

        if (Title !== "") {
            try {
                setIsLoading(true)
                await axios({
                    method: 'post',
                    url: import.meta.env.VITE_BACKEND_URL + "/api/Collections/EditCollection",
                    headers: {},
                    withCredentials: true,
                    data: {
                        CollectionId: SpecificCollection._id,
                        CollectionTitle: Title,
                        CollectionOwnerName: `${User.UserName} ${User.FamilyName}`,
                        Tagline: Tagline,
                        CollectionsCoverPicture: Image,
                        Color: CollectionsColorsData[ColorIndex],
                        CollectionOwnerImage: User.ProfilePicture,
                        CollectionOwnerId: SpecificCollection.CollectionOwnerId
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

    return { Tagline, Title, EditCollectionHandler, ColorIndex, setColorIndex, setTitle, setTagline, Image, setImage, isLoading, setIsLoading }
}



