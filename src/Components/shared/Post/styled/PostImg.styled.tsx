import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";
import { Colors } from "../../../../assets/Colors";

export const PostImg = styled.img`
 width: 100%;
 height: 230px;
 object-fit:scale-down;
 background-color: ${Colors.Primary.SoftBlack};

 @media ${device.tablet} {
    height: 450px;
}

   @media ${device.laptop} {
    height: 250px;
  }

  @media ${device.laptopL} {
    height: 275px;
  }
`