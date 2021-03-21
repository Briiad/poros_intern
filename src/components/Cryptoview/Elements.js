import styled from 'styled-components'

export const DashWrapper = styled.div`
   display: flex;
   background-color: #f2f5f5;
`

export const DataContainer = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: space-between;
`

// CRYPTO CHARTS

export const DataCharts = styled.div`
   width: 78%;
   height: 100vh;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
   padding: 1rem;
`

export const DataChartsVis = styled.div`
   width: 100%;
   height: 70%;
   display: grid;
   grid-template-columns: 50% 50%;
   grid-template-rows: 300px 300px;
   column-gap: 10px;
   row-gap: 15px;
   padding: 1rem;
   align-items: center;
`

export const DataChartsItem = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   padding: 1rem;
   justify-content: center;
   align-items: center;
   background-color: var(--option-primary);
   box-shadow: 0 0 5px #dbdbdb;
`

// CRYPTOVIEW

export const DataChartsSearch = styled.div`
   width: 100%;
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`

export const SearchForm = styled.form`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const SearchInput = styled.input`
   width: 100%;
   padding: 1.5rem;
   font-size: 16px;
   text-align: center;
   font-family: var(--inter);
   border: none;
   border-radius: 5px;
   background-color: var(--option-primary);
   box-shadow: 0 0 5px #dbdbdb; 
   outline: none;
`

export const CryptoContainer = styled.div`
   width: 22%;
   height: 100vh;
   font-family: var(--poppins);
   padding: 0.5rem;
`

export const DataVisContainer = styled.div`
   width: 100%;
   height: 87%;
   display: flex;
   flex-direction: column;
   color: var(--option-secondary);
   overflow-y: scroll;
   background-color: var(--option-primary);
   border-radius: 5px;
   box-shadow: 0 0 5px #dbdbdb;

   &::-webkit-scrollbar{
      display: none;
   }
`

export const DataVisual = styled.div`
   display: flex;
   justify-content:center;
   transition: 0.3s ease;
   font-size: 14px;

   &:hover{
      background-color: #e0e0e0;
      cursor: pointer;
   }
`

export const VisualRow = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: start;
   align-items: center;
   padding: 1rem;
   height: 80px;
   width: 100%;
   border-bottom: 2px solid #f2f5f5;
`

export const Market = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding-right: 24px;
   width: 70%;
`

export const MarketImg = styled.img`
   height: 25px;
   width: 25px;
   margin-right: 10px;
`

export const MarketName = styled.h1`
   font-size: 14px;
`

export const MarketSymbol = styled.p`
   text-transform: uppercase;
`

export const MarketData = styled.div`
   display: flex;
   text-align: center;
   justify-content: space-around;
   align-items: center;
   width: 30%
`

export const MarketPrice = styled.p`
   width: 100px;
   text-align: center;
`

export const MarketCap = styled.p`

`

export const MarketRed = styled.p`
   width: 90px;
   color: red;
   font-weight: 700;
`

export const MarketGreen = styled.p`
   width: 90px;
   color: #32ed64;
   font-weight: 700;
`