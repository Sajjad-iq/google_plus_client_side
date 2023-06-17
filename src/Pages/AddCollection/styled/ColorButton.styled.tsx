import styled from "styled-components";

interface Props {
  Color: string
  isActive: boolean
}
export const ColorButton = styled.button<Props>`
border: none;
background: ${p => p.Color};
border-radius: 50%;
width: 25px;
height: 25px;

${p => p.isActive ?
    `
  outline: 6px solid gray;
`:
    ``
  }
`