import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";
import { Colors } from "../../../../../assets/Colors";



export const Header = styled.h2`
font-size: 0.9rem;
font-weight: 600;
color:gray;

 @media ${device.desktop} {
  font-size: 1.2rem;
  }
`