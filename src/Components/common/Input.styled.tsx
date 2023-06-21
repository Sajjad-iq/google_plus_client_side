import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

interface Props {
  IsValidValue: boolean
}
export const Input = styled.input<Props>`
 width: 100%;
 padding:10px;
 margin:10px 0;
 border-radius: 5px;
 font-size:1rem;
 border:none;
 border-bottom:2px solid ${Colors.Secoundry.Cyan};

      &:focus{
          outline: none;
      }
 ${p => p.IsValidValue ?
    `
     `
    :
    `
     border-bottom:2px solid ${Colors.Primary.red};
     `
  }

    @media ${device.tablet} {
      font-size:1.4rem;
    }
    @media ${device.laptop} {
      margin:10px 10px 10px 0px;
      font-size:1rem;
    }
   
    
 
`
