import React, { useState } from "react"
import ReactCardFlip from 'react-card-flip';

import Layout from "../components/layout"
import SEO from "../components/seo"
import SideNav from "../components/SideNav"

import {
   DashArticle,
   DashContainer,
   DashHeading,
   DashWrapper,
   Update,
   HeadingUser,
   UpdateDesc,
   UserDesc,
   UpdateBtn,
   UpdateBack,
   BackBtn,
   BackDesc,

} from '../components/Dashboard/Element'

import { BiArrowBack } from 'react-icons/bi'


const Dashboard = () => {
   const [isFlipped, setIsFlipped] = useState(false);

   const handleClick = () => {
      setIsFlipped(!isFlipped);
   };

   return (
      <Layout>
         <SEO title="dashboard" />
         <DashWrapper>
            <SideNav />
            <DashContainer>
               <DashHeading>
                  <HeadingUser>
                     <UserDesc>Hello, User!</UserDesc>
                  </HeadingUser>
                  <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                     <Update>
                        <UpdateDesc >Whats New?</UpdateDesc>
                        <UpdateBtn onClick={handleClick}>v0.0.01 alpha</UpdateBtn>
                     </Update>

                     <UpdateBack>
                        <UpdateDesc >Updates</UpdateDesc>
                        <BackDesc>Cryptocurency Visual Viewer</BackDesc>
                        <BackDesc>Dynamic Charts</BackDesc>
                        <BackDesc>Online Wallet</BackDesc>
                        <BackBtn onClick={handleClick}> <BiArrowBack /> </BackBtn>
                     </UpdateBack>
                  </ReactCardFlip>
               </DashHeading>
               <DashArticle>

               </DashArticle>
            </DashContainer>
         </DashWrapper>
      </Layout>
   );
}

export default Dashboard
