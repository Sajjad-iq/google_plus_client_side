import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";

export const PostBody = styled.section`
 width: 95%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: white;
 border-radius: 8px;
 flex-direction: column;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 padding:10px;
 
 @media(${device.laptop}){
    width: 65%;
     padding:15px;

  }
 
 `