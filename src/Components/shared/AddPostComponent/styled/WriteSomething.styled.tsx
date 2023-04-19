import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const WriteSomething = styled.h2`
 width: 75%;
 border:none;
 font-size:0.9rem;
 color:gray;
 font-family: 'Raleway', sans-serif;
 font-weight: 600;

 :focus {
  outline: none;
}

@media ${device.tablet} {
    font-size:1.1rem;
  }
  @media ${device.laptop} {
 font-size:0.9rem;
  }
`