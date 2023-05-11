import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";


export const SmallImage = styled.img`
 
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  width: 25px;
  height: 25px;
 
  @media ${device.tablet} {
   width: 27px;
  height: 27px;
  }

  @media ${device.laptop} {
    width: 25px;
    height: 25px;
  }
 
`