import styled from "styled-components";
interface Props {
  display: string
  bottom: string
}
export const ToggleColumn = styled.section<Props>`
 width: fit-content;
 display: ${p => p.display};
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding:0;
 background-color: white;
 position:absolute;
 bottom: ${p => p.bottom};
 left:-80px;
 z-index:20;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;


`