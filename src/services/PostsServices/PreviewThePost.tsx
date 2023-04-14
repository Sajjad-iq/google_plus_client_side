import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { def, GlobalContext } from '../../Context/GlobalContext'
import { FetchSpecificPost } from './FetchSpecificPost'


export const PreviewThePost = () => {
  const { setSpecificPost } = useContext(GlobalContext)

  const Navigate = useNavigate()
  const { FetchSpecificPostHandler } = FetchSpecificPost()

  const onClickOnPost = (e: any) => {
    setSpecificPost(def)
    FetchSpecificPostHandler(e._id)
    Navigate("/Posts")
  }
  return { onClickOnPost }
}
