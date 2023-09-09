import styled from "styled-components";
import { Colors } from "../../../../assets/Colors";

export const CommentBodySection = styled.section`
 width: calc(100% - 35px);
 display: flex;
 justify-content: center;
 align-items: flex-start;
 background-color: white;
 flex-direction: column;
 border-bottom: 1px solid ${Colors.Primary.Lightgray};
 padding-bottom:10px;

`