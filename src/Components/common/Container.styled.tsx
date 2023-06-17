import styled from "styled-components";

interface Props {
    display: string;
}
export const Container = styled.section<Props>`
 width: 100%;
 height: 100%;
 display: ${p => p.display};
 justify-content:flex-start;
 align-items: center;
 backdrop-filter: blur(2px);
 flex-direction:column;
 position:absolute;
 padding-top:150px;
 top:0;
 z-index:20;

`