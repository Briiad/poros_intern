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

function Signup() {
   return (
      <>
         <Layout>
            <SEO title="Sign up" />
            <BackHome to="/"> <FaArrowLeft /> </BackHome>
            <SignWrapper>
               <SignContainer>
                  <FormContainer>
                     <SignHeader>Sign up</SignHeader>
                     <SignForm>
                        <SignInput type="input" name="name" placeholder="name" required autoComplete="off" />
                        <SignInput type="input" name="email" placeholder="email" required autoComplete="off" />
                        <SignInput type="password" name="password" placeholder="password" required />
                        <SignBtn>CREATE ACCOUNT</SignBtn>
                     </SignForm>
                     <AccCheck>
                        <AccP>Already have an account?</AccP>
                        <RedirToLogin to="/user/login">Log in</RedirToLogin>
                     </AccCheck>
                  </FormContainer>
                  <InfoContainer>

                  </InfoContainer>
               </SignContainer>
            </SignWrapper>
         </Layout>
      </>
   )
}

export default Signup
