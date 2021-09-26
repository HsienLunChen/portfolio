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
          <ProjectsH2 >DDPG + LSTM Audio to Body Generation</ProjectsH2>
          <ProjectsP>
            This is a DDPG and LSTM integrated model that is trained with body skeleton movement of violinist and the MFCC feature of the
            audio file. This model is used to predict and animate a virtual violinist's movement given the audio file of a violin piece.
          </ProjectsP>
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
          <ProjectsH2>Martin Guitar Trader</ProjectsH2>
          <ProjectsP>
            Martin Guitar Trader is a e-commerce trading site that allows user to browse and purchase their desired martin acoustic guitars.
            This site is created with React.js and Redux, styled using styled-components, connected with a MongoDB database.
          </ProjectsP>
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
          <ProjectsP>
            NextCafe is a mobile website Taipei coffee shops searching. I worked as a backend engineer to clean the CafeNomad coffee
            shop dataset using Google Place API and handle the HTTP requests from the client side using Node.js with a SQLite database.
          </ProjectsP>
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
              <SocialP>Live Site: nextcafetw.com</SocialP>
              {/* <SocialIconLinks href='https://nextcafetw.com' target="_blank" aria-label="Github">
                <FaCoffee />
              </SocialIconLinks> */}
            </SocialWrapper>
          </SocialIcons>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects;