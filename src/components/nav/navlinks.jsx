// shapes and animations
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
`;

const LinkItem = styled.li`
    height: 100px;
    padding: 0 1.1em;
    color: #222;
    font-weight: 500;
    font-size: 14px;
    font-size: center;
    justify-content: center;
`

const Link = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`

export function NavLinks(props, {to}) {
    return <NavLinksContainer>
        <LinksWrapper>
        <LinkItem><Link to="#">About</Link></LinkItem>
        <LinkItem><Link to="#">Explore</Link></LinkItem>
        <LinkItem><Link to="#">Test</Link></LinkItem>
        <LinkItem><Link to="#">Testtwo</Link></LinkItem>
        </LinksWrapper>
    </NavLinksContainer>
}