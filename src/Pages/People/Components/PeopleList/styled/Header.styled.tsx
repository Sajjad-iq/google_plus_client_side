import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";
import { Colors } from "../../../../../assets/Colors";



export const Header = styled.h2`
font-size: 0.8rem;
font-weight: 500;
color:${Colors.Primary.MediumGray};

 @media ${device.desktop} {
  font-size: 1.2rem;
  }
`