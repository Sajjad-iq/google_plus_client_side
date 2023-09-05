import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const FooterWrapper = styled.footer`
 width: 100%;
 display: flex;
 justify-content: space-around;
 align-items: center;
 background-color:black ;
 padding:8px 5px;
 
   @media ${device.tablet} {
    width: 90%;
    }
    @media(${device.laptop}){
    display: none;
  }

`