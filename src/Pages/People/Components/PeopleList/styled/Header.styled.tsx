import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";
import { Colors } from "../../../../../assets/Colors";



export const Header = styled.h2`
font-size: 1rem;
font-weight: 800;
color:${Colors.Secoundry.gray};
display:flex;
margin:20px 10px;
position: sticky;
top:10px;


 @media ${device.desktop} {
  font-size: 1.4rem;
  }
`