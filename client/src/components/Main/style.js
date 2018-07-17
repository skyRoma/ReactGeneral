import styled, { injectGlobal, keyframes } from 'styled-components';
import trash from '../../images/trash.png';
import save from '../../images/save.png';
import loading from '../../images/loading.png';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    background-color: lightblue;
    user-select: none;
  }

  h1 {
    font-family: Montserrat;
  }

  .success-message {
    text-align: center;
    color: #5b945b;
    font-weight: bold;
    font-size: 16px;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  max-width: 400px;
  min-width: 250px;
  margin: 0 auto;
`;

export const DropContainer = styled.div`
  display: flex;
`;

export const RecycleBin = styled.figure`
  border: ${props => (props.isActive ? '5px solid #6d8086' : '5px solid transparent')};
  border-radius: 10%;
  background-image: url(${trash});
  background-size: 100px 100px;
  background-repeat: no-repeat;
  width:100px;
  height: 100px;
  margin: 45px auto;
`;

export const Save = styled.figure`
  border: ${props => (props.isActive ? '5px solid #6d8086' : '5px solid transparent')};
  border-radius: 10%;
  background-image: url(${save});
  background-size: 100px 100px;
  background-repeat: no-repeat;
  width:100px;
  height: 100px;
  margin: 45px auto;
`;

export const LogOutBtn = styled.button`
  position: absolute;
  right: 0%;
  margin: 20px;
  border-radius: 20px;
  border: 1px solid #c8c6c6;
  outline: none;
  font-size: 18px;
  cursor: pointer;
  background-color: #464040cf;
  color: white;
  &:active {
    background-color: #13886680;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.img.attrs({
  src: loading,
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${spin} 2s linear infinite;
`;

