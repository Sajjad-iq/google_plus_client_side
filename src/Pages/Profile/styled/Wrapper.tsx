import styled from "styled-components";
import { Colors } from "../../../assets/Colors";


export const Wrapper = styled.section`
 width: 100%;
 display: flex;
 justify-content: flex-start;
 padding:10px;
 4px solid ${Colors.Primary.SoftGray};
 align-items: center;
 flex-wrap: wrap;
 background:white;

 &::-webkit-scrollbar {
  display: none;
}

`