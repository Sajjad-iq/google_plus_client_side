import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";
import { Colors } from "../../../../assets/Colors";

export const UserCardDescription = styled.h4`
font-size: 0.80rem;
font-weight: 400;
color:${Colors.Primary.MediumGray};
width:200px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
margin-top:10px;


@media ${device.tablet} {
}

 @media ${device.desktop} {

  }

`