import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const Count = styled.p`
 color:black;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size:1rem;
 margin-left:8px;

 @media ${device.tablet} {
    font-size:1.35rem;
    margin:10px;
  }

   @media ${device.laptop} {
    font-size:1.1rem;
    margin:10px;
  }

`