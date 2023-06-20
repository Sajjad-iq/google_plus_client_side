import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";

export const CardsWrapper = styled.section`
width:100%;
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 1px;
overflow: scroll;
background:none;

 &::-webkit-scrollbar {
  display: none;
};

@media ${device.tablet} {
        grid-template-columns: repeat(7,1fr);
  }

  @media ${device.laptop} {
        grid-template-columns: repeat(8,1fr);
      gap: 6px;
  }

  @media ${device.laptopM} {
        grid-template-columns: repeat(10,1fr);
      gap: 6px;
  }

  @media ${device.laptopL} {
        grid-template-columns: repeat(15,1fr);
  }


`