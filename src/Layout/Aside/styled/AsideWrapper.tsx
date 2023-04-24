import styled from "styled-components";
import { device } from "../../../assets/breackPoints";


export const AsideWrapper = styled.aside`
 width: 75%;
 height:100%;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 flex-direction: column;
 background-color: white;
 position: fixed;
 border:1px solid gray;
 left:0;
 top:0;
 z-index:5;
 transition : all 0.3s ease;
 transform : translate(-100%);
  box-shadow: rgba(0, 0, 0, 0.35) 100px 0px 15px;


  @media ${device.tablet} {
     width: 65%;
    }
    
 @media ${device.laptop} {
    position: static;
    width: 250px;
    border:none;
    display:flex;
    }

`