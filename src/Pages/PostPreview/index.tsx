import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { EditPost } from '../../Components/shared/EditPost';
import { PostPreviewWindow } from '../../Components/shared/PostPreviewWindow'
import { GlobalContext } from '../../Context/GlobalContext';
import { Wrapper } from './styled/Wrapper';

export const PostPreview = () => {

    const Navigate = useNavigate()
    const { SpecificPost, IsEditPostWindowActive, setIsEditPostWindowActive, setSpecificPostComments } = useContext(GlobalContext)

    return (
        <Wrapper>

            {
                IsEditPostWindowActive ?
                    <EditPost
                        data={SpecificPost}
                        IsActive={IsEditPostWindowActive}
                        CloseFunction={() => setIsEditPostWindowActive(false)}
                    />
                    :
                    <PostPreviewWindow
                        Loading={SpecificPost.PostBody !== "" ? false : true}
                        BackHandler={() => {
                            Navigate("/")
                            setSpecificPostComments([])
                        }}
                    />
            }
        </Wrapper>

    )
}
