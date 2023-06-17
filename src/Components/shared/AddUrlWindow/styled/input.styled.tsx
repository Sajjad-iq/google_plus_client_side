import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";


export const Input = styled.input`
 width: 100%;
 height: 50px;
 padding:10px;
 margin:10px 0;
 border-radius: 5px;
 font-size:1.1rem;
 border:1px solid gray;
 color:blue;
 &:focus{
    outline:none;
  }
      
    @media ${device.tablet} {
      font-size:1.4rem;
    }
    @media ${device.laptop} {
      margin:10px 10px 10px 0px;
      font-size:1rem;
    }
    @media ${device.laptopL} {
      font-size:1.3rem;
    }
     @media ${device.desktop} {
      font-size: 1.5rem;
    }
 
`
