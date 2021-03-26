import styled from 'styled-components'
import { DiOpensource } from 'react-icons/di'

export const LandingPage = styled.section`
   height: 100vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
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
   flex-direction: column;
`

export const HeaderTitle = styled.h1`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 170px;
   height: 170px;
   font-family: var(--poppins);
   color: var(--option-primary);
   font-size: 10rem;
`

export const HeaderSub = styled.p`
   font-family: var(--poppins);
   color: var(--option-primary);
   font-size: 1.25rem;
   font-weight: 600;
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

   @media screen and ( max-width: 960px){
      height: 100%;
      flex-direction: column-reverse;
   }
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

   @media screen and ( max-width: 960px){
      width: 200px;
      height: 200px;
      font-size: 1.5rem;
      margin: 2rem;
   }
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

   @media screen and ( max-width: 960px){
      width: 100%;
      text-align: center;
   }
`

export const AboutH1 = styled.h1`
   font-family: var(--poppins);
   font-size: 2rem;
   color: var(--option-primary);
`
export const AboutP = styled.p`
   font-family: var(--poppins);
   color: var(--option-primary);
   text-align: justify;

   @media screen and (max-width: 960px){
      text-align: center;
      font-size: 14px;
      margin: 1rem;
   }
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

   @media screen and ( max-width: 960px){
      height: 100%;
      flex-direction: column;
   }
`

export const FeatureHeader = styled.div`
   width: 40%;
   height: 30%;
   font-family: var(--poppins);
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and ( max-width: 960px){
      margin-top: 4rem;
      width: 100%;
      margin-bottom: 2rem;
   }
`

export const FeatureHeaderH1 = styled.h1`
   color: var(--option-primary);
   font-size: 32px;

   @media screen and ( max-width: 960px){
      font-size: 18px;
   }
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

   @media screen and ( max-width: 960px){
      grid-template-columns: 120px 120px;
      grid-template-rows: 120px 120px;
   }
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

   @media screen and ( max-width: 960px){
      font-size: 2rem;
      margin-bottom: 2rem;
   }
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

   @media screen and ( max-width: 960px){
      width: 70%;
      padding: 0.75rem;
   }
`

export const Footer = styled.section`
   width : 100%;
   height : 40vh;
   display: flex;
   background-color: #2e2e2e;
`
