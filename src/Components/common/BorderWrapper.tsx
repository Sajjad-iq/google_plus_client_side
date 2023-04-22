import styled from "styled-components";
import { Colors } from "../../assets/Colors";

export const BorderWrapper = styled.button`
 width: 100%;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 background-color: none;
 padding:15px 0;
 border:none;
 border-bottom: 1px solid ${Colors.Primary.Lightgray};
`