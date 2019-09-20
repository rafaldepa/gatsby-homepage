import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from "gatsby";
import { Header1, Header2 } from '../components/headings';
import Button from '../components/button';
import SEO from '../components/seo';

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
  padding: 50px;
  min-height: calc(100vh - 300px);
  color: #fff;
  background-color: #0f0f0f;
  background-image: url(https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
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
`;

const AboutContent = styled.div`
  display: block;  
  z-index: 2;
`;

const WrapperColumn = styled.div`
  display: flex;  
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  flex: 0 0 50%;
  min-height: 300px;
  padding: 50px 150px 50px 50px;

  color: #0c0c0c;
  background: #fff;

  :last-child {
    justify-content: flex-start;
    color: #fff;
    background: #0c0c0c;
    text-align: left;
    padding: 50px 50px 50px 150px;
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
            <Button light>MEET ME</Button>
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
