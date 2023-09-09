import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";
import { Colors } from "../../../../../assets/Colors";



export const More = styled.button`
font-size: 0.9rem;
font-weight: 500;
color:${Colors.Secoundry.Cyan};
background: none;
border: none;

 @media ${device.desktop} {
  font-size: 1.2rem;
  }
`