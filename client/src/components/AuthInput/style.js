import styled from 'styled-components';

export const Input = styled.input`
  width:100%;
  height: 32px;
  background: rgba(255, 255, 255, 0.41);
  font-family: sans-serif;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  color: gray;
  border: 1px solid #c8c6c6;
  letter-spacing: -0.5px;
  margin: 15px 0;
  &::-webkit-input-placeholder {
    font-weight: lighter;
    color: #808080a6;
  }
`;

export const ErrorMsg = styled.div`
  position:relative;
  &:after {
    display:${props => (props.isError ? 'block' : 'none')};
    content:"${props => (props.isError)}";
    color: #b73c3c;
    font-size: 13px;
    font-weight: bold;
    position:absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%,-0%);
    white-space: nowrap;
    word-wrap: normal;
  }
`;