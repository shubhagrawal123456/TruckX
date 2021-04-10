import styled from "styled-components";

export const LoadingRow = styled.div`
  width: 100%;
  height: 90px;
  padding: 15px 0;
  border-bottom: 1px dotted #f2f2f2;
  position: relative;
  &>div{
    display: inline-block;
  }
`;
export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
export const UserInfo = styled.div`
  width:calc(100% - 60px) ;
  height: 60px;
  padding: 0 20px;
  &>div{
    margin: 10px 0;
  }
`;
export const Text = styled.div`
  width: ${props =>props.width}px;
  height: 1rem;
  border-radius: 0.15rem;
`;
export const Btn = styled.div`
  width: ${props =>props.width}px;
  height: 29px;
  border-radius: .25rem;
  position:  absolute;
  right: ${props =>props.right}px;
  top: 50%;
  transform: translateY(-50%);
`;