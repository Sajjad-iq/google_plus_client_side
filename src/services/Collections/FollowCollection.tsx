import axios from 'axios'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const FollowCollection = () => {

    const { SpecificCollection, User } = useContext(GlobalContext)

    const [CollectionsFollowLoading, setCollectionsFollowLoading] = useState(false)

    const AddFollowToCollectionHandler = async () => {


        try {
            setCollectionsFollowLoading(true)
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
                    User.FollowingCollections.push(SpecificCollection._id)
                    SpecificCollection.CollectionFollowing.push(User._id)

                } else {
                    let CollectionIndex = user.FollowingCollections.indexOf(SpecificCollection._id);
                    let UserIndex = collection.CollectionFollowing.indexOf(User._id);
                    User.FollowingCollections.splice(CollectionIndex, 1);
                    SpecificCollection.CollectionFollowing.splice(UserIndex, 1);
                }
            }
            )
        } catch (e) {
            console.log(e)
            window.alert("something went wrong")
        }
        finally {
            setCollectionsFollowLoading(false)
        }
    }
    return { AddFollowToCollectionHandler, CollectionsFollowLoading }
}
