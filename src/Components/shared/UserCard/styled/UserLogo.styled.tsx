import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

interface Props {
  IsForSearch: boolean
}
export const UserLogo = styled.img<Props>`
   border-radius: 50%;
   object-fit: cover;
   margin:0 10px;
${p => p.IsForSearch ?
    `width: 30px;
     height: 30px;

        `
    :
    `
     width: 50px;
     height: 50px;

        `
  }
`