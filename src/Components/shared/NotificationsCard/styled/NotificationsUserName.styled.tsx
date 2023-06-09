import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";


export const NotificationsUserName = styled.h3`

font-size: 0.88rem; 
 color:black;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-right:5px;
 font-family: 'Roboto', sans-serif;
 font-weight: 900;


 @media ${device.tablet} {
           font-size:1rem; 
          }
           @media ${device.laptop} {
           font-size:0.9rem; 
          }
        
  }

 
`