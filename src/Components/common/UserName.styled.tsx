import styled from "styled-components";
import { device } from "../../assets/breackPoints";

interface Props {
  IsCommentUserName: boolean
}
export const UserName = styled.h3<Props>`
${p => p.IsCommentUserName ?
    `font-size:0.8rem;
         @media ${device.tablet} {
           font-size:0.9rem; 
          }
            @media ${device.laptop} {
           font-size:0.8rem; 
          }
        `
    :
    `font-size:0.9rem;
         @media ${device.tablet} {
           font-size:1rem; 
          }
           @media ${device.laptop} {
           font-size:0.9rem; 
          }
        `
  }
 color:black;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-right:5px;

 
`