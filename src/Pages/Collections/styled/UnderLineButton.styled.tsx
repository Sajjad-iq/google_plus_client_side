import styled from "styled-components";
import { Colors } from "../../../assets/Colors";

interface Props {
  IsActive: boolean
}
export const UnderLineButton = styled.button<Props>`
background: none;
color: ${Colors.Primary.white};
padding: 20px 0px ;
display: flex;
justify-content: center;
align-items: center;
width:100%;
border:none;
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size:0.8rem;
  
${p => p.IsActive ?
    `  border-bottom: 1px solid white;
  `
    :
    ``
  }
`