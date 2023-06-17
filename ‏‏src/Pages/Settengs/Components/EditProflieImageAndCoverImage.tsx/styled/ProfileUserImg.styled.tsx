import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";

export const ProfileUserImg = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  object-fit: cover;
 &:hover{
    opacity: 0.8;

 }
  @media ${device.laptop} {
    width: 100px;
    height: 100px;

  }

`