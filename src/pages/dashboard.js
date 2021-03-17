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
} from '../components/Dashboard/Element'


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
                        <UpdateDesc>Whats New?</UpdateDesc>
                        <button onClick={handleClick}>Click to flip</button>
                     </Update>

                     <Update>
                        This is the back of the card.
                        <button onClick={handleClick}>Click to flip</button>
                     </Update>
                  </ReactCardFlip>
                  {/* <Update>
                  <UpdateDesc> Whats New? </UpdateDesc>
               </Update> */}
               </DashHeading>
               <DashArticle>

               </DashArticle>
            </DashContainer>
         </DashWrapper>
      </Layout>
   );
}

export default Dashboard
