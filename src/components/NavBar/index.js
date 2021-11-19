import React from 'react'
import { FaBars } from 'react-icons/fa'

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
//<></>
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>CoderHouse</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="cyberMonday">CyberMonday</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="blackFriday">BlackFriday</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
