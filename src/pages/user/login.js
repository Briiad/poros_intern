import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

//COMPONENTS
import Layout from "../../components/layout"
import SEO from "../../components/seo"

//STYLED COMPONENTS
import {
   AccCheck,
   AccP,
   BackHome,
   FormContainer,
   InfoContainer,
   RedirToLogin,
   SignBtn,
   SignContainer,
   SignForm,
   SignHeader,
   SignInput,
   SignWrapper
} from '../../components/Signup/Elements'

function Login() {
   return (
      <>
         <Layout>
            <SEO title="Sign up" />
            <BackHome to="/"> <FaArrowLeft /> </BackHome>

         </Layout>
      </>
   )
}

export default Login