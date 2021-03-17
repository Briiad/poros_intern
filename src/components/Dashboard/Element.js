import styled from 'styled-components'

export const DashWrapper = styled.div`
   display: flex;
`

export const DashContainer = styled.div`
   width: 100%;
   height: 100vh;
   padding: 2rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
`

export const DashHeading = styled.div`
   width: 100%;
   height: 45vh;
   border-radius: 15px;
   display: flex;
   justify-content: space-between;
`
export const Update = styled.div`
   width: 350px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background-color: var(--primary);
   border-radius: 15px;
`
export const UpdateDesc = styled.h1`
   font-family: var(--inter);
   color: #fff;
`

export const HeadingUser = styled.div`
   width: 65%;
   height: 65%;
   display: flex;
`

export const UserDesc = styled.h1`
   font-family: var(--inter);
`

export const DashArticle = styled.div`
   width: 100%;
   height: 40vh;
   background-color: var(--primary);
   border-radius: 15px;
`