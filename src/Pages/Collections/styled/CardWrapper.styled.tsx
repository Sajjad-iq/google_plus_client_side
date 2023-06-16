import styled from "styled-components";
import { device } from "../../../assets/breackPoints";


export const CardWrapper = styled.section`
height:230px ;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

@media ${device.tablet} {
  height:280px ;

  }
  @media ${device.laptop} {
    
  }
  `