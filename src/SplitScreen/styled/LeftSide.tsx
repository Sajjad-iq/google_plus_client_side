import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const LeftSide = styled.section`
 display:flex;
 z-index:21;
  overflow: scroll;

     &::-webkit-scrollbar {
  display: none;
};

 @media ${device.laptop} {
    z-index:10;
    }

`