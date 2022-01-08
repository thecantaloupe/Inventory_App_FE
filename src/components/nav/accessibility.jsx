import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const LoginButton = styled.button`
    border: 0;
    outline: 0;
    padding: 8px 1em;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border-radius: 20px;
    background-color: rgb(36,50,106);
    margin-bottom: 0;
    line-height: 0;
    background-image: linear-gradient(to right, transparent 0%, rgb(226,90,42) 100%);
    transition: all 240ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: rgb(226,90,42);
    }
`

export function Accessibility(props) {
    return <AccessibilityContainer>
        <LoginButton>Login</LoginButton>
    </AccessibilityContainer>
}