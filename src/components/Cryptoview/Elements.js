import styled from 'styled-components'

export const DashWrapper = styled.div`
   display: flex;
`

export const DataContainer = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
`

export const DataCharts = styled.div`
   width: 35%;
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
   grid-template-rows: 40% 40%;
   column-gap: 10px;
   row-gap: 15px;
   align-items: center;
`

export const DataChartsItem = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const DataChartsSearch = styled.div`
   width: 100%;
   height: 30%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`

export const SearchTitle = styled.h1`

`

export const SearchForm = styled.form`

`

export const SearchInput = styled.input`

`

export const CryptoContainer = styled.div`
   width: 65%;
   height: 100%;
   padding: 1rem;
`

export const DataVisContainer = styled.div`
   width: 100%;
   height: 50vh;
   display: flex;
   flex-direction: column;
   padding: 1rem;
   color: #fff;
   overflow-y: scroll;
   background-color: var(--primary);
   border-radius: 15px;

   &::-webkit-scrollbar{
      display: none;
   }
`

export const DataVisual = styled.div`
   display: flex;
   justify-content:center;
`

export const VisualRow = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: start;
   align-items: center;
   height: 80px;
   width: 100%;
`

export const Market = styled.div`
   display: flex;
   align-items: center;
   padding-right: 24px;
   width: 50%;
`

export const MarketImg = styled.img`
   height: 30px;
   width: 30px;
   margin-right: 10px;
`

export const MarketName = styled.h1`
   font-family: var(--poppins);
   font-size: 16px;
   width: 150px;
`

export const MarketData = styled.div`
   display: flex;
   text-align: center;
   justify-content: space-around;
   width: 50%;
`

export const MarketPrice = styled.p`
   width: 110px;
`

export const MarketVolume = styled.p`
   width: 155px;

`

export const MarketRed = styled.p`

`

export const MarketGreen = styled.p`

`