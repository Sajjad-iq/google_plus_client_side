import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";
import { Colors } from "../../../../assets/Colors";

export const PostImg = styled.img`
 width: 100%;
 max-height: 550px;
 object-fit:scale-down;
 background-color: ${Colors.Primary.SoftBlack};

 @media ${device.tablet} {
}

   @media ${device.laptop} {
  }

  @media ${device.laptopL} {
  }
`