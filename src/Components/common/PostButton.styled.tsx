import styled from "styled-components";
import { device } from "../../assets/breackPoints";
interface Props {
  color: string
  backgroundColor: string
}
export const PostButton = styled.button<Props>`
 height: 40px;
 width: 40px;
 color:${p => p.color};
 background-color: ${p => p.backgroundColor};
 display: flex;
 justify-content: center;
 align-items: center;
 font-size:1rem;
 padding:8px;
 border:none;
 border-radius:100% ;
 font-family: 'Raleway', sans-serif;
 font-weight: 600;
 
 @media ${device.tablet} {
    font-size:1.4rem;
    height: 45px;
    width: 45px;
  }
  @media ${device.laptop} {
    font-size:1rem;
    height: 40px;
    width: 40px;
    padding:0;
  }

`