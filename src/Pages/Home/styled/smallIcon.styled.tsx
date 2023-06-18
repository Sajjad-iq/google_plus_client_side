import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const SmallIcon = styled.img`
  width: 75%;
  height: 25px;
  object-fit:cover;

  @media ${device.desktop} {
  height: 35px;

}
`

