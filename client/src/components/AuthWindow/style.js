import styled from 'styled-components';
import user from '../../images/user.svg';
import foreign from '../../images/foreign.png';
import { StyledLink } from '../Home/style';

export const UserImg = styled.figure`
  background-image: url(${props => (props.userRole === 'user' ? user : foreign)});
  background-size: 100px 100px;
  background-repeat: no-repeat;
  width:100px;
  height: 100px;
  margin: 20px auto;
`;

export const SignView = styled.section`
  min-width: 250px;
  max-width: 385px;
  width: 40%;
  min-height: 370px;
  background: linear-gradient(to bottom,#fbfbfb,#ffffff69);
  border-radius: 15%;
  Box-shadow: 10px 10px 22px 0px rgba(169,159,151,0.26);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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

export const LoginBtn = styled.button`
  border: 1px solid #c8c6c6;
  background-color: #1db387;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: white;
  width: 31%;
  margin: 12px auto;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  &:active {
    background-color: #13886680;
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

export const AuthQuestion = styled.p`  
  text-align: center;
  color: #3e3e3e;
`;

export const AuthLink = StyledLink.extend`
  color: #00bcd4;
`;
