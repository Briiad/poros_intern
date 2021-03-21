import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
} from '../components/Landingpage/Elements'

const IndexPage = (props) => (
   <Layout>
      <SEO title="Home" />
      <BackgroundImage fluid={props.data.indexImage.childImageSharp.fluid} className="parallax">
         <Navbar />
         <LandingPage>
            <Header>
               <HeaderTitle>CrypVis</HeaderTitle>
            </Header>
         </LandingPage>
      </BackgroundImage>

      <AboutPage>

      </AboutPage>

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
