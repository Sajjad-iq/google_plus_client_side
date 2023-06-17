import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const CommentUserLogo = styled.img`
  width: 25px;
  height: 25px;
  margin-right:15px;
  border-radius: 50%;
  object-fit: cover;


@media ${device.tablet} {
  width: 35px;
  height: 35px;
  }
  
  @media ${device.laptop} {
    width: 25px;
    height: 25px;
  }
  @media ${device.laptopM} {
    width: 30px;
  height: 30px;
  }
`