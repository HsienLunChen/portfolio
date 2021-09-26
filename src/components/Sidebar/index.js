import React, { useState } from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarWrapper,
  SideBtnWrap,
  SideBtnRoute,
  SideBarMenu
} from './SidebarElements'

const SideBar = ( {isOpen, toggle}) => {

  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="projects" onClick={toggle}>
            Projects
          </SideBarLink>
          <SideBarLink to="contact" onClick={toggle}>
            Contact
          </SideBarLink>
        </SideBarMenu>
        {/* <SideBtnWrap>
          <SideBtnRoute to="/signin">Sign In</SideBtnRoute>
        </SideBtnWrap> */}
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar;