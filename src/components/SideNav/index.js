import React, { useContext } from 'react'
import { AiFillHome, AiFillFund, AiFillWallet, AiOutlineLogout } from 'react-icons/ai'
import firebase from 'gatsby-plugin-firebase'
import { navigate } from 'gatsby'
import { AuthContext } from '../../Context/auth'


import {
   NavItem,
   NavLinks,
   NavLogo,
   NavLogout,
   NavMenu,
   Sidenav,
} from './Elements';

function SideNav() {

   const { user } = useContext(AuthContext);

   const handleLogout = async () => {
      await firebase.auth().signOut()
      navigate("/")
      alert("logout berhasil")
   }

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
         <p onClick={handleLogout}>
            <NavLogout >
               <AiOutlineLogout />
            </NavLogout>
         </p>
      </Sidenav>
   )
}

export default SideNav
