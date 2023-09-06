import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const NavWrapper = styled.nav`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 
 @media ${device.laptop} {
  height: 65px;
  }
`