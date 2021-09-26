import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  SocialIconLinks,
  SocialIcons,
  ArrowForward,
  ArrowRight
} from './HeroElements';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {Button} from '../ButtonElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  }
  return (
    <HeroContainer id="home">
      <HeroBg>

      </HeroBg>
      <HeroContent>
        <HeroH1>Hello, I'm Hsien-Lun</HeroH1>
        <HeroP>An enthusiastic software engineer from Paul G. Allen School of Computer Science & Engineering at the University of Washington, Seattle</HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            View Resume{hover? <ArrowForward/> : <ArrowRight/>}

          </Button>
        </HeroBtnWrapper>
        <HeroBtnWrapper>
          <SocialIcons>
            <SocialIconLinks href='https://github.com/HsienLunChen' target="_blank" aria-label="Github">
              <FaGithub />
            </SocialIconLinks>
            <SocialIconLinks href='http://linkedin.com/in/hsienlun' target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLinks>
          </SocialIcons>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;