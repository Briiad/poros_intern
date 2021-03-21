import styled from 'styled-components'
import { DiOpensource } from 'react-icons/di'

export const LandingPage = styled.section`
   height: 100vh;
   width: 100%;
   display: flex;
   background-color: rgba(0, 0, 0, 0.6);
   overflow-y: scroll;
   overflow-x: hidden;
`

export const Header = styled.div`
   width: 100%;
   padding: 2rem;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const HeaderTitle = styled.h1`
   font-family: var(--poppins);
   color: var(--option-primary);
`

export const AboutPage = styled.section`
   width : 100%;
   height : 80vh;
   padding: 1rem;
   display: flex;
   align-items: center;
   justify-content: space-around;
   background-color: #1a1a1a;
   overflow-y: scroll;
   overflow-x: hidden;
`

export const AboutImgCont = styled.div`
   width: 400px;
   height: 400px;
   display: flex;
   justify-content: center;
   align-items: center;
   color: var(--option-primary);
   font-size: 3rem;
   font-family: var(--poppins);
   font-weight: 700;
   background-color: rgba(0,0,0,0.6);
   border-radius: 7px;
`

export const AboutImgIcon = styled(DiOpensource)`
   color: var(--option-primary);
   font-size: 3rem;
   font-family: var(--inter);
`

export const AboutDesc = styled.div`
   width: 40%;
   height: 70%;
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const AboutH1 = styled.h1`
   font-family: var(--poppins);
   font-size: 2rem;
   color: var(--option-primary);
`
export const AboutP = styled.p`
   font-family: var(--inter);
   color: var(--option-primary);
   text-align: justify;
`

export const GoldSpan = styled.span`
   color: var(--text-secondary);
`

export const FeaturesPage = styled.section`
   width : 100%;
   height : 80vh;
   display: flex;
   background-color: #1a1a1a;
`

export const DashboardPage = styled.section`
   width : 100%;
   height : 100vh;
   display: flex;
   background-color: #1a1a1a;
`

export const Footer = styled.section`
   width : 100%;
   height : 40vh;
   display: flex;
   background-color: #1a1a1a;
`

export const SectionBreak = styled.section`
   width: 100%;
   height: 40vh;
   display: flex;
   background: var(--tersier);
`