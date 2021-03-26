import * as React from "react"
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'
import { AiOutlineLineChart, AiOutlineWallet, } from 'react-icons/ai';
import { FaBitcoin, FaUserShield } from 'react-icons/fa'
import { motion } from 'framer-motion'

//ADDITIONAL CSS
import '../components/Landingpage/parallaxBg.css'

//COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from '../components/Navbar'
import { DiOpensource } from 'react-icons/di'

//STYLED COMPONENTS
import {
   LandingPage,
   AboutPage,
   Header,
   HeaderTitle,
   FeaturesPage,
   DashboardPage,
   Footer,
   AboutImgCont,
   AboutDesc,
   AboutH1,
   GoldSpan,
   AboutP,
   AboutImgIcon,
   FeatureHeader,
   FeatureMenu,
   FeatureItems,
   FeatureHeaderH1,
   DashHeader,
   DashBtn,
   HeaderSub,
} from '../components/Landingpage/Elements'

const IndexPage = (props) => (
   <Layout>
      <SEO title="Home" />
      <Navbar />
      <BackgroundImage fluid={props.data.indexImage.childImageSharp.fluid} className="parallax">
         <LandingPage >
            <Header>
               <HeaderTitle as={motion.div}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1, type: "spring", stiffness: 100 }}
               >
                  <DiOpensource />
               </HeaderTitle>
            </Header>
         </LandingPage>
      </BackgroundImage>

      <AboutPage>
         <AboutImgCont as={motion.div}
            whileHover={{ rotate: 10 }}
         >
            <AboutImgIcon />
            CRYPVIS
         </AboutImgCont>
         <AboutDesc>
            <AboutH1>WHAT IS <GoldSpan>CRYPVIS</GoldSpan>?</AboutH1>
            <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta explicabo perferendis nulla tempore illo nihil deserunt itaque optio modi excepturi impedit</AboutP>
         </AboutDesc>
      </AboutPage>

      <FeaturesPage>
         <FeatureHeader>
            <FeatureHeaderH1>WHAT'S <GoldSpan>CRYPVIS</GoldSpan> ALL ABOUT?</FeatureHeaderH1>
         </FeatureHeader>
         <FeatureMenu>
            <FeatureItems>
               <AiOutlineLineChart />
            </FeatureItems>
            <FeatureItems>
               <AiOutlineWallet />
            </FeatureItems>
            <FeatureItems>
               <FaBitcoin />
            </FeatureItems>
            <FeatureItems>
               <FaUserShield />
            </FeatureItems>
         </FeatureMenu>
      </FeaturesPage>

      <DashboardPage>
         <DashHeader>COME JOIN US!</DashHeader>
         <DashBtn>Be a user!</DashBtn>
      </DashboardPage>
      <Footer>

      </Footer>
   </Layout >
)

export default IndexPage;

export const pageQuery = graphql`
   query {
      indexImage: file(relativePath: { eq: "landingpage.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 1800) {
               ...GatsbyImageSharpFluid
            }
         }
      }
   }
`;

