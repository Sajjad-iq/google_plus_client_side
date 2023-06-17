import styled from "styled-components";
import { device } from "../../../../../../assets/breackPoints";

export const TextAreaComponent = styled.textarea`
 width: 100%;
 background-color: none;
 border-radius: 10px;
 margin:20px 0;
 font-size:0.9rem;
 font-family: 'Raleway', sans-serif;
 font-weight:600 ;
 border:none;
 resize: none;
 overflow-y: hidden;
 
 &:focus {
   outline: none;
 }

    @media ${device.tablet} {
      font-size:1rem;
    }
    @media ${device.laptop} {
      font-size:0.9rem;
    }
    @media ${device.laptopL} {
      font-size:1.2rem;
    }
   
`