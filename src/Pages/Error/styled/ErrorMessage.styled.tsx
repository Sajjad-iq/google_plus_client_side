import styled from "styled-components";
import { device } from "../../../assets/breackPoints";
import { Colors } from "../../../assets/Colors";



export const ErrorMessage = styled.h2`
font-size: 1.2rem;
font-weight: 900;
color:${Colors.Primary.red};
margin:10px;
text-align: center;


@media ${device.tablet} {
 font-size: 1.4rem;
}
@media ${device.tablet} {
 font-size: 1.2rem;
}
 @media ${device.desktop} {
  font-size: 1.6rem;

  }
`