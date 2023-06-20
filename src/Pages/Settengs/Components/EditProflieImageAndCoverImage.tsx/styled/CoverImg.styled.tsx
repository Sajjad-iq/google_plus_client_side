import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";

export const CoverImg = styled.img`
  width: 100%;
  height: 125px;
  object-fit:cover;
    border-radius:8px ;

 &:hover{
    opacity: 0.8;

 }
  @media ${device.desktop} {

  }
`