import React, { useState, useContext } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { AuthContext } from '../../Context/auth'
import { navigate } from 'gatsby'

//COMPONENTS
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import firebase from 'gatsby-plugin-firebase'

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

   const [data, setData] = useState({
      email: '',
      password: '',
      error: null,
   });

   const { setUser } = useContext(AuthContext)

   const handleChange = e => {
      setData({ ...data, [e.target.name]: e.target.value })
   }

   const handleSubmit = async e => {
      e.preventDefault()

      try {
         const res = await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
         setUser(res)
         navigate("/dashboard")
         alert("Berhasil login")
      } catch (err) {
         setData({ ...data, error: err.message })
      }
   }

   return (
      <>
         <Layout>
            <SEO title="Sign up" />
            <BackHome to="/"> <FaArrowLeft /> </BackHome>
            <SignWrapper>
               <SignContainer>
                  <FormContainer onSubmit={handleSubmit}>
                     <SignHeader>Log in</SignHeader>
                     <SignForm>
                        <SignInput type="email" name="email" placeholder="email" autoComplete="off" value={data.email} onChange={handleChange} />
                        <SignInput type="password" name="password" placeholder="password" value={data.password} onChange={handleChange} />
                        <SignBtn type="submit">LOG IN</SignBtn>
                     </SignForm>
                     <AccCheck>
                        <AccP>New to Crypvis?</AccP>
                        <RedirToLogin to="/user/signup">Sign up here!</RedirToLogin>
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

export default Login