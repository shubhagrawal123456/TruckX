import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export const TextWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  text-align: center;
  color: #999;
  h1{
    font-size: 7rem;
    line-height: 1;
    padding: 0;
    margin: 0;
  }
  h2{
    font-size: 2rem;
    line-height: 1;
  }
`;
