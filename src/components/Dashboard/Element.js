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
   background-color: var(--primary);
   border-radius: 15px;
`

export const DashArticle = styled.div`
   width: 90%;
   height: 40vh;
   background-color: var(--primary);
   border-radius: 15px;
`