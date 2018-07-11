import styled from 'styled-components';
import user from '../../images/user.svg';
import foreign from '../../images/foreign.png';
import { StyledLink } from '../Home/style';
import userRoles from '../../constants/userRoles';


export const UserImg = styled.figure`
  background-image: url(${props => (props.userRole === userRoles.user ? user : foreign)});
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

export const AuthQuestion = styled.p`  
  text-align: center;
  color: #3e3e3e;
`;

export const AuthLink = StyledLink.extend`
  color: #00bcd4;
`;
