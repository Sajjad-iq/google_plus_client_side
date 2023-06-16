import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const ProfileUserDescription = styled.h4`
width:65%;
font-size:0.9rem;
 color:black;
 margin:10px;
 text-align: center;
 word-wrap: break-word; 
 margin-top:10px

 @media ${device.laptop} {
      font-size:1rem;
}

`