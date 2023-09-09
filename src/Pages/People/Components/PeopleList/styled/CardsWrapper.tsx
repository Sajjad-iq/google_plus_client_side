import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";

export const CardsWrapper = styled.section`
width:100%;
min-height: 130vh;
display: flex;
flex-direction: column;
overflow: scroll;
background:none;

 &::-webkit-scrollbar {
  display: none;
};

@media ${device.tablet} {
  }

  @media ${device.laptop} {
  }

  @media ${device.laptopM} {
  }

  @media ${device.laptopL} {
  }


`