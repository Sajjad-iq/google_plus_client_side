import axios from 'axios'
import { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { UserData } from '../LocalStorage/UserData'

export const FollowCollection = () => {

    const { setSpecificCollection, SpecificCollection, setUser, User } = useContext(GlobalContext)


    const AddFollowToCollectionHandler = async () => {


        try {

            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Collections/AddFollowToCollection",
                headers: {},
                withCredentials: true,
                data: {
                    UserId: User._id,
                    CollectionId: SpecificCollection._id,
                    operation: SpecificCollection.CollectionFollowing.includes(User._id) ? "delete" : "add"
                }
            }
            ).then((e) => {

                let user = User
                let collection = SpecificCollection

                if (e.data === 1) {
                    user.FollowingCollections.push(SpecificCollection._id)
                    collection.CollectionFollowing.push(User._d)

                    setUser(user)
                    setSpecificCollection(collection)
                } else {
                    let CollectionIndex = user.FollowingCollections.indexOf(SpecificCollection._id);
                    let UserIndex = collection.CollectionFollowing.indexOf(User._id);
                    user.FollowingCollections.splice(CollectionIndex, 1);
                    collection.CollectionFollowing.splice(UserIndex, 1);

                    setUser(user)
                    setSpecificCollection(collection)
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
    return AddFollowToCollectionHandler
}
