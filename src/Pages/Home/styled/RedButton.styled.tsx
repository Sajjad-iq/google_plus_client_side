import styled from "styled-components";
import { Colors } from "../../../assets/Colors";

export const RedButton = styled.button`
border: none;
background: ${Colors.Primary.red};
color: ${Colors.Primary.white};
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
position: fixed;
right: 15px;
bottom: 90px;
padding:10px;
height: 55px;
width: 55px;
box-shadow: rgba(198, 62, 62,0.2) 0px 7px 29px 0px;
`