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

const StyledLink = styled.a`
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px;
  min-height: calc(100vh - 300px);
`;

const AboutContent = styled.div`
  display: block;
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
          <StyledLink href="https://github.com/rafaldepa">
            <Button light>MEET ME</Button>
          </StyledLink>
        </AboutContent>        
      </WrapperAbout>
      <WrapperColumn>
        <ColumnContent>
          <Header2>Front-End Developer</Header2>
          <StyledLink href="https://github.com/rafaldepa">
            <Button>VISIT GITHUB</Button>
          </StyledLink>
        </ColumnContent>       
      </WrapperColumn> 
      <WrapperColumn>
        <ColumnContent>
          <Header2>Graphic Designer</Header2>
          <StyledLink href="https://behance.net/rafaldepa">
            <Button light>VISIT BEHANCE</Button>
          </StyledLink>
        </ColumnContent>
      </WrapperColumn>         
    </PageWrapper>
  </>
)

export default IndexPage
