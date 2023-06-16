import { RedButton } from '../../styled/RedButton.styled'
import { SmallIcon } from '../../styled/smallIcon.styled'
import pen from '../../../../assets/ICONS/pencil.svg'
import { useNavigate } from 'react-router-dom'
export const RedPenButton = () => {
  const Navigate = useNavigate()

  return (
    <RedButton onClick={() => Navigate("/AddPost")}>
      <SmallIcon src={pen} alt='add post pen' />
    </RedButton>
  )
}
