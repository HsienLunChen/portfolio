import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1000px) {
    height: 1300px;
  }

  @media screen and (max-width: 400px) {
    height: 1400px;
  }
`

export const ProjectsWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  height: 350px;
  max-height: 350px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ProjectsIcon = styled.img`
  width: 220px;
  height: 160px;
  margin-bottom: 10px;
`

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  /* @media screen and (max-width: 480px) {
    font-size: 2rem;
  } */
`

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`

export const ProjectsP = styled.p`
  font-size: 0.8rem;
  text-align: center;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
`

export const SocialWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20px;
`

export const SocialP = styled.p`
  font-size: 1rem;
  color: #000;
`

export const SocialIconLinks = styled.a`
  color: #000;
  margin-left: 10px;
  font-size: 1rem;
`