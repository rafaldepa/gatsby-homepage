import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from "gatsby";
import { Header1, Header2 } from '../components/headings';
import Button from '../components/button';
import SEO from '../components/seo';
import HeroImg from '../images/hero.jpg';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,500,900&display=swap&subset=latin-ext");

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;   
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledHref = styled.a`
  text-decoration: none;
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-flow: row wrap;
`;

const WrapperAbout = styled.div`
  flex: 0 0 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  min-height: calc(100vh - 402px);
  color: #fff;
  background-color: #0f0f0f;
  background-image: url(${HeroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(12, 12, 12, 0.9);
  }

  @media(min-width: 900px) {
    min-height: calc(100vh - 200px);
  }

  @media(min-width: 1100px) {
    min-height: calc(100vh - 300px);
  }
`;

const AboutContent = styled.div`
  display: block;  
  z-index: 2;
`;

const WrapperColumn = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 0 0 100%;
  min-height: 100px;
  padding: 40px 30px;

  color: #0c0c0c;
  background: #fff;

  :last-child {
    color: #fff;
    background: #0c0c0c;
  }

  @media(min-width: 900px) {
    flex: 0 0 50%;
    min-height: 200px;
    padding: 30px 60px 30px 30px;
    text-align: right;
    justify-content: flex-end;

    :last-child {
      padding: 30px 30px 30px 60px;
      text-align: left;
      justify-content: flex-start;
    }
  }

  @media(min-width: 1100px) {
    min-height: 300px;
    padding: 30px 150px 30px 30px;

    :last-child {
      padding: 30px 30px 30px 150px;
    }
  }
`;

const ColumnContent = styled.div`
  display: block;
`;

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <GlobalStyle />
    <PageWrapper>
      <WrapperAbout>
        <AboutContent>
          <Header1>Hi! I'm Rafał Depa.</Header1>
          <StyledLink to="/about">
            <Button light>ABOUT ME</Button>
          </StyledLink>
        </AboutContent>        
      </WrapperAbout>
      <WrapperColumn>
        <ColumnContent>
          <Header2>Front-End Developer</Header2>
          <StyledHref href="https://github.com/rafaldepa">
            <Button>VISIT GITHUB</Button>
          </StyledHref>
        </ColumnContent>       
      </WrapperColumn> 
      <WrapperColumn>
        <ColumnContent>
          <Header2>Graphic Designer</Header2>
          <StyledHref href="https://behance.net/rafaldepa">
            <Button light>VISIT BEHANCE</Button>
          </StyledHref>
        </ColumnContent>
      </WrapperColumn>         
    </PageWrapper>
  </>
)

export default IndexPage
