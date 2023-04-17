import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

interface Props {
  IsValidValue: boolean
}
export const TextField = styled.textarea<Props>`
 width: 90%;
 padding:10px;
 margin:10px 0;
 border-radius: 5px;
 font-size:1rem;
 font-family: 'Raleway', sans-serif;
 font-weight: 600;
 resize: none;
 border:none;
 
  &:focus{
    border:none;
      outline: none;
  }
  
    @media ${device.tablet} {
      font-size:1.4rem;
    }
    @media ${device.laptop} {
      font-size:1rem;
    }
    @media ${device.laptopL} {
      font-size:1.3rem;
    }
     @media ${device.desktop} {
      font-size: 1.5rem;
    }

 
 
`
