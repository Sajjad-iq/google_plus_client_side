import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

interface Props {
  IsForSearch: boolean
}
export const UserName = styled.h3<Props>`
${p => p.IsForSearch ?
    `font-size:0.8rem;
         @media ${device.tablet} {
           font-size:1rem; 
          }
            @media ${device.laptop} {
           font-size:0.8rem; 
          }
        `
    :
    `font-size:1rem;
         @media ${device.tablet} {
           font-size:1.2rem; 
          }
           @media ${device.laptop} {
           font-size:1rem; 
          }
        `
  }
 color:black;

 
`