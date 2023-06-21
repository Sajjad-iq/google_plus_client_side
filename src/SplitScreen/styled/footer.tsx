import styled from "styled-components";
import { device } from "../../assets/breackPoints";
export const Footer = styled.footer`
 width: 100%;
 height: 64px;
 position:fixed;
 bottom:0;
 display: flex;
 justify-content: center;
 align-items: center;
 
 @media ${device.laptop} {
    z-index:-1;
    }
 
`