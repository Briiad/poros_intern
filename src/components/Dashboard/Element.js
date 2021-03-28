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
   background-color: #1a1a1a;
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
   background-color: var(--option-secondary);
   border-radius: 15px;
`

export const UpdateBack = styled.div`
   width: 350px;
   height: 100%;
   display: flex;
   flex-direction: column;
   padding: 2rem;
   background-color: var(--option-secondary);
   border-radius: 15px;
`

export const UpdateDesc = styled.h1`
   font-family: var(--poppins);
   color: #fff;
`

export const BackDesc = styled.p`
   font-family: var(--inter);
   color: var(--text-secondary);
   font-size: 14px;
   font-weight: 600;
   font-style: italic;
   padding: 0.50rem;
`

export const UpdateBtn = styled.button`
   background: transparent;
   font-family: var(--poppins);
   color: var(--text-secondary);
   font-style: italic;
   border: none;
   cursor: pointer;
`

export const BackBtn = styled.button`
   width: 20px;
   height: 20px;
   background: transparent;
   font-family: var(--poppins);
   color: var(--text-secondary);
   font-size: 1rem;
   border: none;
   cursor: pointer;
`

export const HeadingUser = styled.div`
   width: 65%;
   height: 65%;
   display: flex;
   flex-direction: column;
`

export const UserWel = styled.h1`
   font-family: var(--poppins);
   color: var(--option-primary);
`

export const UserDesc = styled.p`
   font-family: var(--poppins);
   color: var(--text-secondary);
   font-weight: 600;
`

export const DashArticle = styled.div`
   width: 100%;
   height: 40vh;
   border-radius: 15px;
`