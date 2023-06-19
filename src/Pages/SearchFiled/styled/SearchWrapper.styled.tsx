import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const SearchWrapper = styled.section`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items:flex-start;
 background: white;
 padding:10px;
 top:0;
 position: fixed;
 z-index:30;

 @media ${device.laptop} {
  position: static;

}

`