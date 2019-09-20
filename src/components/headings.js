import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    display: block;
    font-size: 4.8rem;
    font-weight: 500;
    line-height: 1.1;
    margin: 0 0 30px 0;
`;

const StyledH2 = styled.h2`
    display: block;
    font-size: 3.2rem;
    font-weight: 300;
    line-height: 1.1;
    margin: 0 0 30px 0;
`;

export const Header1 = (props) => {
    return(
        <StyledH1 {...props} />
    )
}

export const Header2 = (props) => {
    return(
        <StyledH2 {...props} />
    )
}