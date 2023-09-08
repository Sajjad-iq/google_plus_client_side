import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";
import { Colors } from "../../../../../assets/Colors";



export const Header = styled.h2`
font-size: 0.9rem;
font-weight: 800;
color:${Colors.Primary.MediumGray};
display:flex;
margin: 10px 0 20px 5px;

 @media ${device.desktop} {
  font-size: 1.2rem;
  }
`