import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export const StyledLink = styled(Link)`
    text-decoration: none;
    width: 40%;
    margin: 0 auto;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const LogoImg = styled.figure`
  background-image: url(${logo});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 80%;
  height: 25%;
  margin: 20px auto;
  position: relative;
  bottom: 25px;
`;

export const HomeView = styled.section`
  min-width: 250px;
  max-width: 385px;
  width: 40%;
  height: 370px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(to bottom,#fbfbfb,#ffffff69);
  border-radius: 15%;
  Box-shadow: 10px 10px 22px 0px rgba(169,159,151,0.26);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  border: 1px solid #c8c6c6;
  background-color: #6196d4;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  color: white;
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 12px;
  outline: none;
  &:active {
    background-color: #13886680;
  }
`;

export const StartBtn = Button.extend`
  position: relative;
  top: 23px;
  background-color: #1db387;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
