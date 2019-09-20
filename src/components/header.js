import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
    display: block;
    font-size: 3.8rem;
    font-weight: 300;
    line-height: 1.1;
    margin: 0 0 30px 0;
`;

const Header2 = (props) => {
    return(
        <StyledHeader {...props} />
    )
}

export default Header2;