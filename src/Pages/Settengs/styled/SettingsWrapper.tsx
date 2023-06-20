import styled from "styled-components";
import { device } from "../../../assets/breackPoints";


export const SettingsWrapper = styled.section`
 width: 95%;
  height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
 flex-wrap: wrap;
 padding: 10px;

 @media ${device.desktop} {
 width: 80%;

  }
`