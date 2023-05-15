import styled from "styled-components";
import { device } from "../../../assets/breackPoints";


export const CollectionsColorWrapper = styled.section`
 width: 100%;
  display: grid;
  grid-template-columns: repeat(8,1fr);
  gap: 10px;
  padding:20px;

 background:white;

  &::-webkit-scrollbar {
  display: none;
};

@media ${device.tablet} {
    width: 350px;

  }
`