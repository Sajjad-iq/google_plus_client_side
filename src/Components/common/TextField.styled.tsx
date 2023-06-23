import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

interface Props {
  IsValidValue: boolean
}
export const TextField = styled.textarea<Props>`
 width: 100%;
 padding:10px;
 margin:10px 5px;
 border-radius: 5px;
 font-size:0.9rem;
  font-family: 'Roboto', sans-serif;
 font-weight: 600;
 resize: none;
 border:none;
 padding-top:18px;
  border-bottom:2px solid ${Colors.Secoundry.Cyan};

    &::-webkit-scrollbar {
  display: none;
};

  &:focus{
      outline: none;
  }
 @media ${device.tablet} {
      font-size:1rem;
    }
    @media ${device.laptop} {
      font-size:0.9rem;
    }
  
 
 
`
