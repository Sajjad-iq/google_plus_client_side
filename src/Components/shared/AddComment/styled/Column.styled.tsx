import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const Column = styled.section`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 flex-direction: column;
 padding:5px 10px;
 border: 1px solid gray;
 background-color: white;
 position: sticky;
 bottom:60px;

 @media ${device.laptop} {
    bottom:0px;
   }

`

