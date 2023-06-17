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
 font-size:0.9rem;
 font-family: 'Raleway', sans-serif;
 font-weight: 600;
 resize: none;
 border:none;
 padding-top:18px;


  &:focus{
    border:none;
      outline: none;
  }
 @media ${device.tablet} {
      font-size:1rem;
    }
    @media ${device.laptop} {
      font-size:0.9rem;
    }
  
 
 
`
