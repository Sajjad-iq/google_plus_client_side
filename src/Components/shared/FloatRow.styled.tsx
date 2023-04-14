import styled from "styled-components";
interface Props {
    width: string
    align: string
    padding: string
}
export const FloatRow = styled.section<Props>`
 width: ${p => p.width};
 display: flex;
 justify-content: ${p => p.align};
 align-items: center;
 padding:${p => p.padding};
 background-color: white;
 position: absolute;
 top: 0;
 z-index: 5;
 background: none;

`