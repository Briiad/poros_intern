import * as React from "react"
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'

//ADDITIONAL CSS
import '../components/Landingpage/parallaxBg.css'

//COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from '../components/Navbar'

//STYLED COMPONENTS
import {
   LandingPage,
   AboutPage,
   Header,
   HeaderTitle,
   FeaturesPage,
   DashboardPage,
   Footer,
   SectionBreak,
   AboutImgCont,
   AboutDesc,
   AboutH1,
   GoldSpan,
   AboutP,
   AboutImgIcon,
} from '../components/Landingpage/Elements'

const IndexPage = (props) => (
   <Layout>
      <SEO title="Home" />
      <Navbar />
      <BackgroundImage fluid={props.data.indexImage.childImageSharp.fluid} className="parallax">
         <LandingPage>
            <Header>
               {/* <HeaderTitle>CrypVis</HeaderTitle> */}
            </Header>
         </LandingPage>
      </BackgroundImage>

      <AboutPage>
         <AboutImgCont>
            <AboutImgIcon />
            CRYPVIS
         </AboutImgCont>
         <AboutDesc>
            <AboutH1>WHAT IS <GoldSpan>CRYPVIS?</GoldSpan></AboutH1>
            <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta explicabo perferendis nulla tempore illo nihil deserunt itaque optio modi excepturi impedit</AboutP>
         </AboutDesc>
      </AboutPage>

      <FeaturesPage>

      </FeaturesPage>

      <DashboardPage>

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
      aboutImage: file(relativePath: {eq: "aboutpage.jpg" }) {
         childImageSharp {
            fluid(maxWidth: 1800) {
               ...GatsbyImageSharpFluid
            }
         }
      }
   }
`;

