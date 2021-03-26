import styled from 'styled-components'
import { Link } from 'gatsby'

export const SignWrapper = styled.section`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items:center;
   background-color: #1a1a1a;
`

export const BackHome = styled(Link)`
   color: var(--text-secondary);
   position: fixed;
   top: 10px;
   left: 10px;
`

export const SignContainer = styled.div`
   width: 65%;
   height: 70vh;
   display: flex;
   align-items: center;
   background-color: rgba(40,40,40,0.6);

   @media screen and (max-width: 960px){
      width: 100%;
      height: 100%;
      flex-direction: column;
   }
`

export const FormContainer = styled.div`
   width: 45%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column;
   padding: 1rem;
   border-right: 5px solid #1a1a1a;

   @media screen and (max-width: 960px){
      width: 70%;
      height: 70%;
      border-right: none;
      border-bottom: 5px solid #1a1a1a;
   }
`

export const SignHeader = styled.h1`
   color: var(--text-secondary);
   font-family: var(--poppins);

`

export const SignForm = styled.form`
   width: 100%;
   height: 60%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const SignInput = styled.input`
   padding: 1rem 1.5rem;
   margin: 10px;
   border-radius: 5px;
   border: 1px solid var(--text-secondary);
   background: transparent;
   color: var(--text-secondary);
   text-align: center;
   outline: none;
`

export const SignBtn = styled.button`
   border: none;
   background-color: var(--text-secondary);
   color: var(--option-primary);
   font-family: var(--poppins);
   padding: 0.5rem 3rem;
   border-radius: 5px;
`

export const AccCheck = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`

export const AccP = styled.p`
   color: var(--text-secondary);
   font-family: var(--poppins);
   font-size: 12px;
`

export const RedirToLogin = styled(Link)`
   color: #1f6dff;
   font-family: var(--poppins);
   font-size: 12px;
`

export const InfoContainer = styled.div`
   width: 55%;
   height: 100%;

   @media screen and ( max-width: 960px){
      width: 100%;
      height: 30%;
   }
`