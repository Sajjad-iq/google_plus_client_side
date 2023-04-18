import styled from "styled-components";
import { Colors } from "../../../assets/Colors";
import { device } from "../../../assets/breackPoints";

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
bottom:105px;
padding:10px;
height: 55px;
width: 55px;
box-shadow: rgba(198, 62, 62,0.2) 0px 7px 29px 0px;

@media ${device.tablet} {
height: 65px;
width: 65px;
right: 45px;
bottom:130px;
}

@media ${device.laptop} {
height: 55px;
width: 55px;
right: 35px;
bottom:60px;
}

@media ${device.laptopM} {
height: 55px;
width: 55px;
right: 50px;
bottom:70px;
}

@media ${device.desktop} {
height: 75px;
width: 75px;
right: 60px;
bottom:100px;
}
`