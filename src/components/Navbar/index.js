import React from 'react';
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

const Navbar = ( {toggle} ) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="home"
          smooth={true}
          spy={true}
          exact='true'
          duration={500}>
            Hsien-Lun Chen
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="projects"
              smooth={true}
              spy={true}
              exact='true'
              duration={500}
              >Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"
              smooth={true}
              spy={true}
              exact='true'
              duration={500}
              >Contact</NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign in</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;