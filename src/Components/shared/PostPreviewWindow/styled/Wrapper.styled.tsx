import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

interface Props {

}
export const Wrapper = styled.section<Props>`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding:0;
 position: relative;


 @media(${device.laptop}){
    width:60%;
    background-color: white ;
    border:1px solid gray;
  }

  @media(${device.desktop}){
    width:45%;
  }
`