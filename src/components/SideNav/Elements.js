import styled from 'styled-components'
import { Link } from 'gatsby'
import { BiBitcoin } from 'react-icons/bi'

import '../layout.css'

export const Sidenav = styled.nav`
   width: 70px;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   background: var(--tersier);
`

export const NavLogo = styled(BiBitcoin)`
   width: 70px;
   height: 70px;
   display: flex;
   align-items: center;
   padding: 1rem;
   color: var(--option-primary);
   background-color: var(--text-secondary);
`

export const NavMenu = styled.ul`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 70px;
   height: 100%;
`

export const NavItem = styled.li`
   width: 70px;
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const NavLinks = styled(Link)`
   text-decoration: none;
   list-style: none;
   color: #fff;
   font-size: 1.25rem;
   opacity: 0.7;
   cursor: pointer;

   &:hover{
      opacity: 1;
   }
`

