import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";


export const P = styled.p`
font-size: 0.8rem;
font-weight: 500;
color:${Colors.Secoundry.gray};
display:flex;
margin:0 5px;

@media ${device.tablet} {
 font-size: 1rem;
}
@media ${device.laptop} {
 font-size: 0.8rem;
}
 @media ${device.desktop} {
  font-size: 1rem;

  }
`