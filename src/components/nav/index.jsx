import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";

const NavBarContainer = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    padding: 0 1.5em;
`;

const LeftSection = styled.div`
    display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
    display: flex;
`;

export function NavBar(props){
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const user = false

    return <NavBarContainer>
        <LeftSection>
            <Logo />
        </LeftSection>
        <MiddleSection>
            {!isMobile && <NavLinks />}
        </MiddleSection>
        <RightSection>
        {!isMobile && <Accessibility user={user}/>}
        {isMobile && <MobileNavLinks user={user}/>}
      </RightSection>
    </NavBarContainer>
}