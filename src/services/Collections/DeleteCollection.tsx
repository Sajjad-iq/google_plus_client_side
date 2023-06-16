import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

export const DeleteCollection = () => {

    const Navigate = useNavigate()
    const { SpecificCollection } = useContext(GlobalContext)

    const DeleteCollectionHandler = async () => {
        try {
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Collections/DeleteCollection",
                headers: {},
                withCredentials: true,
                data: {
                    CollectionId: SpecificCollection._id,
                    CollectionOwnerId: SpecificCollection.CollectionOwnerId,
                }
            }
            ).then(() => {
                Navigate("/")
            })
        } catch (e) {
            console.log(e)
            window.alert("something went wrong")
        }
    }

    return { DeleteCollectionHandler }
}
