import styled from "styled-components";
import { Colors } from "../../../assets/Colors";
import { device } from "../../../assets/breackPoints";



export const TitleInput = styled.input`
 width: 100%;
 padding:10px 0;
 margin:20px 0;
 font-size:0.9rem;
 background: transparent;
 border:none;
 border-bottom: 1px solid ${Colors.Primary.white} ;
 color:white;
 outline: none;

 &::placeholder {
  color: white;
  opacity: 0.8; 
};



 @media ${device.tablet} {
      font-size:1rem;
    }
    @media ${device.laptop} {
      font-size:1rem;
    }
    @media ${device.laptopL} {
      font-size:1.1rem;
    }
  
 
`
