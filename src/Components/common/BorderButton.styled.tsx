import styled from "styled-components";
import { Colors } from "../../assets/Colors";


export const BorderButton = styled.button`
background: none;
color: ${Colors.Secoundry.Cyan};
padding:5px 10px;
display: flex;
justify-content: flex-start;
align-items: center;
width:100px;
border:none;
font-family: 'Roboto', sans-serif;
font-weight: 600;
margin:5px 0;

    &:active{
          opacity: 0.8;
    }
`