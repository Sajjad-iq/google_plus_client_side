import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";
import { Colors } from "../../../../assets/Colors";

export const WriteSomething = styled.h2`
 width: 75%;
 border:none;
 font-size:0.85rem;
 color:${Colors.Secoundry.darkGray};
  font-family: 'Roboto', sans-serif;
 font-weight: 600;

 :focus {
  outline: none;
}

@media ${device.tablet} {
    font-size:1rem;
  }
  @media ${device.laptop} {
 font-size:0.85rem;
  }
`