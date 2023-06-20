import styled from "styled-components";
import { device } from "../../../assets/breackPoints";


export const CollectionsCardWrapper = styled.section`
width:100%;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 5px;
padding:3px;
 overflow: scroll;
  height: calc(100% - 60px);

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

    @media ${device.desktop} {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 6px;
  }
  `