import * as React from "react"
import styled from 'styled-components'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SideNav from "../../components/SideNav"

const DashWrapper = styled.div`
   display: flex;
`

const Cryptoview = () => (
   <Layout>
      <SEO title="cryptoview" />
      <DashWrapper>
         <SideNav />
         crypto
      </DashWrapper>
   </Layout>
)

export default Cryptoview
