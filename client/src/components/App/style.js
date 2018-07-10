import styled, { injectGlobal } from 'styled-components';
import trash from '../../trash.png';
import save from '../../save.png';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    background-color: lightblue;
  }

  h1 {
    font-family: Montserrat;
  }

  body {
    user-select: none;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 190px;
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
