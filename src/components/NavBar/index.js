import React from "react";
import { FaBars } from "react-icons/fa";
import Cart from "./Cart"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { yellow, blueGrey } from "@mui/material/colors";
//<></>

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: yellow[500], color: blueGrey[900] }}>CH</Avatar>
            </Stack>
          </NavLogo>
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
              <Cart />
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
