import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";

export const CardsWrapper = styled.section`
width:100%;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
overflow: scroll;
background:white;

 &::-webkit-scrollbar {
  display: none;
};

@media ${device.tablet} {
  grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${device.laptop} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 6px;
  }


`