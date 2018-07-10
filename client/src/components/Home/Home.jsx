import React from 'react';
import { LogoImg, HomeView, Button, StartBtn, ButtonWrapper, StyledLink } from './style';

const Home = () => (
  <HomeView>
    <LogoImg />
    <ButtonWrapper>
      <StyledLink to="/login"><Button>Sign In</Button></StyledLink>
      <StyledLink to="/join"><Button>Sign Up</Button></StyledLink>
    </ButtonWrapper>
    <StyledLink to="/api/counter"><StartBtn>Start</StartBtn></StyledLink>
  </HomeView>
);

export default Home;
