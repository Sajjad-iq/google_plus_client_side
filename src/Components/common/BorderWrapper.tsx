import styled from "styled-components";
import { Colors } from "../../assets/Colors";

export const BorderWrapper = styled.section`
 width: 100%;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 background-color: white;
 padding:14px 8px;
 border:none;
 border-bottom: 1px solid ${Colors.Primary.Lightgray};
`