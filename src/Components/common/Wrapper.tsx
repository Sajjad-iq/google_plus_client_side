import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const Wrapper = styled.section`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: white;
 flex-direction: column;

  &::-webkit-scrollbar {
  display: none;
};

 @media ${device.tablet} {
   padding:20px;
}
@media ${device.laptop} {
   align-items: flex-start;

}

`