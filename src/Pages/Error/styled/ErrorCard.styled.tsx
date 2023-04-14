import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const ErrorCard = styled.section`
 width: 75%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: white;
 flex-direction: column;
 border-radius: 8px;
 border: 1px solid gray;
 padding:10px;

 @media ${device.tablet} {
    width: 300px;
}
@media ${device.laptopL} {
    width: 350px;
}
`