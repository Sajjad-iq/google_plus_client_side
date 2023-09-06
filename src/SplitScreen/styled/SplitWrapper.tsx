import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

export const SplitWrapper = styled.section`
 width: 100%;
 height:100vh;
 position: relative;
 background-color:${Colors.Primary.white} ;
  padding-bottom:61px;

    @media ${device.tablet} {
  padding-bottom:65px;
  };

  @media ${device.laptop} {
  padding-bottom:0px;
  };
`
