import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";
import { Colors } from "../../../../assets/Colors";

export const Column = styled.section`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 flex-direction: column;
 padding:5px 10px;
 border: 1px solid ${Colors.Primary.SoftGray};
 background-color: white;
 position: sticky;
 bottom:0px;

 @media ${device.laptop} {
    bottom:0px;
    z-index:10;

   }

`

