import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const HeroContent = styled.div`
  z-index:3;
  max-width:1200px;
  position: absolute;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  max-width: 600px;
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
`

export const SocialIconLinks = styled.a`
  color: #F5B301;
  font-size: 2rem;
`

export const ResumeLinks = styled.a`
  background: #F5B301;
  border-radius: 50px;
  padding: 8px 20px;
  font-size: 16px;
  text-decoration: none;
  color: #FFF;

  &:hover {
    background: #FFF;
    color: #000;
    padding: 12px 24px;
    transition: all 0.2s ease-in-out;
  }
`


export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 1rem;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 1rem;
`

export const Btn = styled.button`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#F5B301' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};

  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#F5B301')};
  }
`