import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const ImageWrapper = styled.section`
  width: 45px;
  height: 47px;
  margin-right:10px;
  position: relative;
  background: none;

@media ${device.tablet} {
    width: 55px;
    height: 55px;

  }
  @media ${device.laptop} {
    width: 45px;
    height: 45px;

  }
`