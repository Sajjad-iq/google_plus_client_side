import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const NavUserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin:0 10px;
  display:none;

  @media ${device.laptop} {
  display:flex;
  }

`