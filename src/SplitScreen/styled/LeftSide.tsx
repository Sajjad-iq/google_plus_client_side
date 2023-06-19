import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const LeftSide = styled.section`
 height:100%;
 display:flex;
 z-index:21;

 @media ${device.laptop} {
    z-index:10;
    }

`