import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";
import { Colors } from "../../../../assets/Colors";



export const NotificationsBody = styled.article`
font-size: 0.75rem;
font-weight: 500;
color:${Colors.Primary.SoftBlack};
margin-top:3px;
width:100%;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
text-align: start;


@media ${device.tablet} {
 font-size: 0.9rem;
}

 @media ${device.desktop} {
  font-size: 1.1rem;

  }
`