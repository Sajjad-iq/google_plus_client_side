import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const Header = styled.header`
 width: 100%;
 position:fixed;
 top:0px;

 @media ${device.laptop} {
    z-index:20;
    }
`