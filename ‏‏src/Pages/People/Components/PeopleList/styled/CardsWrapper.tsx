import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";

export const CardsWrapper = styled.section`
width:100%;
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 10px;
overflow: scroll;
background:white;

 &::-webkit-scrollbar {
  display: none;
};

@media ${device.tablet} {
        grid-template-columns: repeat(6,1fr);
  }

  @media ${device.laptop} {
        grid-template-columns: repeat(6,1fr);
      gap: 6px;
  }

  @media ${device.laptopM} {
        grid-template-columns: repeat(8,1fr);
      gap: 6px;
  }

  @media ${device.laptopL} {
        grid-template-columns: repeat(10,1fr);
  }


`