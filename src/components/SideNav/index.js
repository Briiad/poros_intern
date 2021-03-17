import React from 'react'
import { AiFillHome, AiFillFund, AiFillWallet } from 'react-icons/ai'

import {
   NavItem,
   NavLinks,
   NavLogo,
   NavMenu,
   Sidenav,
} from './Elements';

function SideNav() {
   return (
      <Sidenav>
         <NavLogo />
         <NavMenu>
            <NavItem>
               <NavLinks to="/dashboard/" > <AiFillHome /> </NavLinks>
            </NavItem>
            <NavItem>
               <NavLinks to="/dashboard/cryptoview" > <AiFillFund /> </NavLinks>
            </NavItem>
            <NavItem>
               <NavLinks to="/dashboard/wallet" > <AiFillWallet /> </NavLinks>
            </NavItem>
         </NavMenu>
      </Sidenav>
   )
}

export default SideNav
