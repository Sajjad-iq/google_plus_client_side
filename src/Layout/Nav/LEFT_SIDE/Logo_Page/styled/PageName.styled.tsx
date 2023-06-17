import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";
import { Colors } from "../../../../../assets/Colors";

export const PageName = styled.h1`
font-size: 1.1rem;
font-weight: 600;
color:${Colors.Primary.white};
font-family: 'Raleway', sans-serif;
margin-left:15px;

       @media ${device.tablet} {
         font-size: 1.2rem;
        }
        @media ${device.laptop} {
         font-size: 1rem;
        }
`