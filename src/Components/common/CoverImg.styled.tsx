import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const CoverImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit:cover;

   @media ${device.mobileL} {
     height: 375px;
 }

    @media ${device.laptop} {
     height: 200px;
 }


`