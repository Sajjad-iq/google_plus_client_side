import styled from "styled-components";
import { Colors } from "../../../assets/Colors";
import { device } from "../../../assets/breackPoints";

interface Props {
  IsValidValue: boolean
}
export const Input = styled.input<Props>`
  width: 100%;
  padding: 10px 5px;
  font-size: 1.2rem;
  border:none;
  border-bottom:2px solid ${Colors.Secoundry.Cyan};
  background:White;
  font-family: 'Roboto', sans-serif;
  outline:none;

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