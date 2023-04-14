import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";
import { Colors } from "../../../../../assets/Colors";



export const Header = styled.h2`
font-size: 1.2rem;
font-weight: 800;
color:${Colors.Secoundry.gray};
display:flex;
margin:20px 10px;


@media ${device.tablet} {
font-size: 1.4rem;
}
@media ${device.laptop} {
font-size: 1.2rem;
}
 @media ${device.desktop} {
  font-size: 1.4rem;

  }
`