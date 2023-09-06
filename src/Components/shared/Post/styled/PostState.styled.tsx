import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";
import { useContext } from "react";
import { GlobalContext } from "../../../../Context/GlobalContext";
import { Colors } from "../../../../assets/Colors";


export const PostState = styled.p`
 color:black;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size:0.8rem;
 margin-right:5px;
 margin-left:5px;

  @media ${device.tablet} {
    font-size:0.9rem;
  }

   @media ${device.laptop} {
    font-size:0.8rem;
  }
`