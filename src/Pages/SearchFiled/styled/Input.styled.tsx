import styled from "styled-components";
import { Colors } from "../../../assets/Colors";

interface Props {
  IsValidValue: boolean
}
export const Input = styled.input<Props>`
  width: 100%;
  padding: 10px 5px;
  font-size: 1.2rem;
  border:none;
  background:none;
  font-family: 'Roboto', sans-serif;
  outline:none;
  margin:0 10px;

  &:focus{
      outline:none};
      }

${p => p.IsValidValue ?
    `
     `
    :
    `border:1px solid ${Colors.Primary.red};
     
     `
  }


`