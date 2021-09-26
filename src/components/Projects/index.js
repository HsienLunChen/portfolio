import React from 'react';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  SocialIconLinks,
  SocialIcons,
  SocialWrapper,
  SocialP
} from './ProjectsElements';

import { FaCoffee, FaGithub } from 'react-icons/fa';

import icon1 from '../../images/violin.svg';
import icon2 from '../../images/guitar.svg';

import icon3 from '../../images/coffee-cup.svg';

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={icon1}/>
          <ProjectsH2 >DDPG and LSTM based Audio to Body Generation</ProjectsH2>
          <ProjectsP>this is paragraph 1</ProjectsP>
          {/* <SocialIcons>
            <SocialWrapper>
              <SocialP>Github Repo</SocialP>
              <SocialIconLinks href='https://github.com/HsienLunChen' target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLinks>
            </SocialWrapper>
          </SocialIcons> */}
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={icon2}/>
          <ProjectsH2>Martin Guitar Trader: a Martin Guitar trading e-Commerce site</ProjectsH2>
          <ProjectsP>this is paragraph 2</ProjectsP>
          <SocialIcons>
            <SocialWrapper>
              <SocialP>Github Repo</SocialP>
              <SocialIconLinks href='https://github.com/HsienLunChen/eCommerce-shopping-cart' target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLinks>
            </SocialWrapper>
          </SocialIcons>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={icon3}/>
          <ProjectsH2 >NextCafe (In Progress)</ProjectsH2>
          <ProjectsP>NextCafe is a </ProjectsP>
          {/* <SocialIcons>
            <SocialWrapper>
              <SocialP>Github Repo</SocialP>
              <SocialIconLinks href='https://github.com/HsienLunChen' target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLinks>
            </SocialWrapper>
          </SocialIcons> */}
          <SocialIcons>
            <SocialWrapper>
              <SocialP>Live Site</SocialP>
              <SocialIconLinks href='https://nextcafetw.com' target="_blank" aria-label="Github">
                <FaCoffee />
              </SocialIconLinks>
            </SocialWrapper>
          </SocialIcons>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects;