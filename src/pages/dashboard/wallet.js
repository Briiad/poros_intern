import * as React from "react"
import styled from 'styled-components'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SideNav from "../../components/SideNav"

const DashWrapper = styled.div`
   display: flex;
`

const Wallet = () => (
   <Layout>
      <SEO title="wallet" />
      <DashWrapper>
         <SideNav />
         wallet
      </DashWrapper>
   </Layout>
)

export default Wallet
