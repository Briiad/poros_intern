import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

//STYLED COMPONENTS
import {
   MobileIcon,
   Nav,
   NavContainer,
   NavIcon,
   NavItems,
   NavLinks,
   NavLogo,
   NavMenu,
   Span
} from './Elements'

function Navbar() {

   const [click, setClick] = useState(false);
   const [scroll, setScroll] = useState(false);

   const handleClick = () => setClick(!click);

   const changeNav = () => {
      if (window.scrollY >= 100) {
         setScroll(true);
      } else {
         setScroll(false);
      }
   };

   useEffect(() => {
      changeNav();
      window.addEventListener("scroll", changeNav)
   }, []);

   return (
      <Nav active={scroll} click={click} >
         <NavContainer>
            <NavLogo>
               <NavIcon />
               CRYPVIS
            </NavLogo>

            <MobileIcon onClick={handleClick}>
               {click ? <FaTimes style={{ color: "#fff" }} /> : <FaBars style={{ color: "#fff" }} />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
               <NavItems>
                  <NavLinks to="user/login">Log in</NavLinks>
               </NavItems>
               <NavItems>
                  <NavLinks to="user/signup"><Span>Sign up</Span></NavLinks>
               </NavItems>
            </NavMenu>
         </NavContainer>
      </Nav>
   )
}

export default Navbar
