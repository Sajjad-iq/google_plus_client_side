import styled from "styled-components";
import { device } from "../../../assets/breackPoints";
import { Colors } from "../../../assets/Colors";

export const SearchWrapper = styled.section`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: flex-start;
 align-items:center;
 background: ${Colors.Primary.Lightgray};
 top:0;
 position: fixed;
 z-index:30;
 flex-direction:column;

 @media ${device.laptop} {
  position: static;

}

`