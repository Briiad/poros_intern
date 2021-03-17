import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SideNav from "../components/SideNav"

import {
   DashArticle,
   DashContainer,
   DashHeading,
   DashWrapper,
} from '../components/Dashboard/Element'

const Dashboard = () => (
   <Layout>
      <SEO title="dashboard" />
      <DashWrapper>
         <SideNav />
         <DashContainer>
            <DashHeading>

            </DashHeading>
            <DashArticle>

            </DashArticle>
         </DashContainer>
      </DashWrapper>
   </Layout>
)

export default Dashboard
