import React from 'react';
import { LogoImg, HomeView, Button, StartBtn, ButtonWrapper, StyledLink } from './style';
import paths from '../../constants/paths';

const Home = () => (
  <HomeView>
    <LogoImg />
    <ButtonWrapper>
      <StyledLink to={paths.login}><Button>Sign In</Button></StyledLink>
      <StyledLink to={paths.join}><Button>Sign Up</Button></StyledLink>
    </ButtonWrapper>
    <StyledLink to={paths.counterApi}><StartBtn>Start</StartBtn></StyledLink>
  </HomeView>
);

export default Home;
