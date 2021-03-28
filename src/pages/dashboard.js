import React, { useState, useContext } from "react"
import ReactCardFlip from 'react-card-flip';
import { AuthContext } from '../Context/auth'

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
   UserWel,

} from '../components/Dashboard/Element'

import { BiArrowBack } from 'react-icons/bi'


const Dashboard = () => {

   const data = useContext(AuthContext);
   console.log(data);

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
                     <UserWel>Welcome,</UserWel>
                     <UserDesc>User!</UserDesc>
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
                        <BackDesc>User Authentication</BackDesc>
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
