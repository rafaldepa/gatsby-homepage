import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 56px;
    padding: 0 50px;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 1.7rem;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    will-change: transform;
    transition: .3s transform ease-in-out;
    color: ${props => props.light ? "#fff" : "#1c1c1c"};
    border: 2px solid ${props => props.light ? "#fff" : "#1c1c1c"};
    border-radius: 5px;
    background: transparent;
    cursor: pointer;

    :focus {
        outline: none;
    }
`;

const Button = (props) => {
    return (
        <StyledButton {...props} />
    )
}

export default Button;