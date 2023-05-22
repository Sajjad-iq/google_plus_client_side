import styled from "styled-components";
import { Colors } from "../../../assets/Colors";

interface Props {
  IsActive: boolean
  color: string
}
export const UnderLineButton = styled.button<Props>`
background: none;
color: ${Colors.Primary.Black};
padding: 15px 0px ;
margin-top:3px;
display: flex;
justify-content: center;
align-items: center;
width:100%;
border:none;
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size:0.8rem;
  
${p => p.IsActive ?
    `  border-bottom: 2px solid ${p.color};
  `
    :
    ``
  }
`