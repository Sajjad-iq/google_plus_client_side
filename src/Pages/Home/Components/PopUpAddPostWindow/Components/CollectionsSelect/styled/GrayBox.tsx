import styled from "styled-components";
import { Colors } from "../../../../../../../assets/Colors";
import { device } from "../../../../../../../assets/breackPoints";

export const GrayBox = styled.section`
 width: 99%;
 display: flex;
 justify-content: flex-start;
 align-items: flex-start;
 background-color: ${Colors.Primary.SoftGray};
 flex-direction: column;
 padding:10px;
 border-radius:4px;
 overflow: scroll;

 &::-webkit-scrollbar {
  display: none;
};

 @media ${device.laptop} {
 width: 50%;
  }

`