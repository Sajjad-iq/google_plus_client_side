import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const ImageWrapper = styled.section`
  width: 50px;
  height: 50px;
  margin-right:10px;
  position: relative;
  background: none;

@media ${device.tablet} {
    width: 55px;
    height: 55px;

  }

`