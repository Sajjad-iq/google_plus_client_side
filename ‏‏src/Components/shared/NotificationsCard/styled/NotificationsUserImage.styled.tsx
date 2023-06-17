import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const NotificationsUserImage = styled.img`
  width: 47px;
  height: 47px;
  margin-right:10px;
  border-radius: 50%;
  object-fit: cover;


@media ${device.tablet} {
    width: 50px;
    height: 50px;

  }
  @media ${device.laptop} {
    width: 43px;
    height: 43px;

  }
`