import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const NavWrapper = styled.nav`
 width: 100%;
 height: 60px;
 display: flex;
 justify-content: space-between;
 align-items: center;

 @media ${device.laptop} {
  height: 65px;
  }
`