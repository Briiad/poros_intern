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
   background-color: rgba(9,9,9,0.6);
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
   height : 100vh;
   display: flex;
   justify-content: space-around;
   align-items: center;
   background-color: #1a1a1a;
`

export const FeatureHeader = styled.div`
   width: 40%;
   height: 30%;
   font-family: var(--poppins);
   display: flex;
   justify-content: center;
   align-items: center;
`

export const FeatureHeaderH1 = styled.h1`
   color: var(--option-primary);
   font-size: 32px;
`

export const FeatureMenu = styled.div`
   width: 40%;
   height: 70%;
   display: grid;
   grid-template-columns: 200px 200px;
   grid-template-rows: 200px 200px;
   column-gap: 40px;
   row-gap: 40px;
   padding: 1rem;
   justify-content: center;
`

export const FeatureItems = styled.div`
   background-color: rgba(9,9,9,0.6);
   color: var(--text-secondary);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 3rem;
   border-radius: 5px;
`

export const DashboardPage = styled.section`
   width : 100%;
   height : 80vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 1rem;
   background-color: #1a1a1a;
`

export const DashHeader = styled.h1`
   font-family: var(--poppins);
   color: var(--option-primary);
   font-size: 4rem;
`

export const DashBtn = styled.button`
   width: 20%;
   padding: 2rem;
   background: none;
   font-family: var(--poppins);
   font-size: 18px;
   color: var(--text-secondary);
   border: 1px solid var(--text-secondary);
   border-radius: 5px;
   cursor: pointer;
   transition: all 0.2s ease;

   &:hover{
      background-color: var(--text-secondary);
      color: var(--option-primary);
      transition: all 0.2s ease;
   }
`

export const Footer = styled.section`
   width : 100%;
   height : 40vh;
   display: flex;
   background-color: #2e2e2e;
`
