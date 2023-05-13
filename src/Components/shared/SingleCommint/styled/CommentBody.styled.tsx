import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const CommentBody = styled.article`
 width:100%;
 color:black;
 font-size:0.8rem;
 word-wrap: break-word; 
 text-align: start;


 @media ${device.tablet} {
      font-size:1rem; 
  }
`