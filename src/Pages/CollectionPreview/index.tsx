import { useState } from 'react'
import { Wrapper } from '../../Components/shared/Wrapper'
import { CollectionPreView } from './Components/CollectionPreView'
import { EditCollections } from './Components/EditCollections'

export const CollectionPreview = () => {

  const [isEditWindowActive, setIsEditWindowActive] = useState(false)

  return (
    <Wrapper style={window.innerWidth >= 1024 ? {} : { position: "fixed", top: "0", bottom: '0', overflow: "scroll", zIndex: "20" }}>
      {
        isEditWindowActive ?
          <EditCollections />
          :
          <CollectionPreView setIsActive={setIsEditWindowActive} />
      }
    </Wrapper>
  )
}

export default CollectionPreview
