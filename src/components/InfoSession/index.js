import React from 'react';
import { Button } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
  SocialIconLinks,
  SocialIcons
} from './InfoElements'

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const InfoSection = ( {
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>I'm currently looking for entry level software engineer opportunity. Please contact me through my work email!</Subtitle>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <SocialIcons>
                  <SocialIconLinks href='https://github.com/HsienLunChen' target="_blank" aria-label="Github">
                    <FaGithub />
                  </SocialIconLinks>
                  <SocialIconLinks href='http://linkedin.com/in/hsienlun' target="_blank" aria-label="LinkedIn">
                    <FaLinkedin />
                  </SocialIconLinks>
                </SocialIcons>
                <BtnWrap>
                  <Button to="home"
                  smooth={true}
                  spy={true}
                  exact='true'
                  duration={500}
                  offset={-80}
                  primary={primary ? 1 : 0}
                  >Back to top</Button>
                </BtnWrap>
              </TextWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;