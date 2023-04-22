import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const OptionsWindowWrapper = styled.section`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding:15px 25px;
 position: fixed;
 top: 0px;
 z-index:20;
background-image: linear-gradient( rgba(0, 0, 0, 0.600),transparent);


@media ${device.laptop} {
    display: none;
  }

`