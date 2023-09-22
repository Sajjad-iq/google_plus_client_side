import styled from "styled-components";
import { Colors } from "../../../../assets/Colors";


export const OptionsButton = styled.button`
background: none;
color: ${Colors.Secoundry.Cyan};
padding:2px 30px;
display: flex;
justify-content: center;
align-items: center;
width:fit-content;
border:none;
font-family: 'Roboto', sans-serif;
font-weight: 600;
margin:5px 0;

    &:active{
          opacity: 0.8;
    }
`