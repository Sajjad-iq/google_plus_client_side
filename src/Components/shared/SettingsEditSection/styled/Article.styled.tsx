import styled from "styled-components";
import { Colors } from "../../../../assets/Colors";
import { device } from "../../../../assets/breackPoints";



export const Article = styled.article`
font-size: 0.9rem;
font-weight: 600;
color:${Colors.Primary.Black};
text-align: start;
word-wrap: break-word;   
background:white; 
display:flex;
justify-content: flex-start;
 align-items: flex-start;  

 @media ${device.desktop} {
font-size: 1.1rem;

  }
`