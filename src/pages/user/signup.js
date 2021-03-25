import React, { useState, useContext } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { navigate } from 'gatsby'

//COMPONENTS
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import firebase from 'gatsby-plugin-firebase'
import { AuthContext } from '../../Context/auth'

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
         const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
         setUser(res)
         navigate("/user/login")
         alert("Berhasil membuat akun")
         console.log(res);
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
                     <SignHeader>Sign up</SignHeader>
                     <SignForm>
                        <SignInput type="email" name="email" placeholder="email" autoComplete="off" value={data.email} onChange={handleChange} />
                        <SignInput type="password" name="password" placeholder="password" value={data.password} onChange={handleChange} />
                        {data.error ? <p>{data.error}</p> : null}
                        <SignBtn type="submit">CREATE ACCOUNT</SignBtn>
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
