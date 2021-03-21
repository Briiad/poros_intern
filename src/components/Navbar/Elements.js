import styled from 'styled-components'
import { Link } from 'gatsby'
import { DiOpensource } from 'react-icons/di'

export const Nav = styled.nav`
   background-color: ${({ active }) => active ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.6)"};
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top:0;
   z-index: 900;
   font-family: var(--poppins);
   font-weight: 600;

   @media screen and (max-width: 960px){
      background-color: ${({ click }) => (click ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.6)")};
      transition: 0.8s all ease;
   }
`

export const NavContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   max-width: 1000px;
`

export const NavLogo = styled(Link)`
   color: var(--option-primary);
   justify-self: flex-start;
   cursor: pointer;
   text-decoration: none;
   font-size: 1.5rem;
   font-family: var(--poppins);
   display: flex;
   align-items: center;
`

export const NavIcon = styled(DiOpensource)`
   margin: 0 0.5rem 0.2rem;
   color: var(--option-primary);
`

export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 960px){
      display: block;
      position: absolute;
      top:0;
      right:0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      z-index: 999;
   }
`

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center;
   list-style: none;
   text-align: center;

   @media screen and (max-width: 960px){
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      position: absolute;
      right: ${({ click }) => (click ? "0%" : "1000px")};
      opacity: 1;
      transition: all 0.5s ease;
      background-color: rgba(0, 0, 0, 0.9);
   }
`

export const NavItems = styled.li`
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 960px){
      width: 100%;
   }
`

export const NavLinks = styled(Link)`
   color: var(--option-primary);
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0.5rem 1rem;
   height: 100%;
   font-weight: 600;
   font-size: 16px;
   cursor: pointer;

   @media screen and (max-width: 960px){
      text-align: center;
      font-size: 2rem;
      padding: 2rem;
      width: 100%;
      display: table;
      cursor: pointer;
   }

   &:hover{
         color: var(--text-secondary);
         transition: all 0.2s ease;
   }
`