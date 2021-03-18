import React, { useState, useEffect } from "react"
import axios from 'axios'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SideNav from "../../components/SideNav"

import {
   CryptoContainer,
   DashWrapper,
   DataCharts,
   DataChartsItem,
   DataChartsSearch,
   DataChartsVis,
   DataContainer,
   DataVisContainer,
   SearchForm,
   SearchInput,
   SearchTitle,
} from '../../components/Cryptoview/Elements'

import DataVisual from '../../components/Cryptoview/datavisual'
import Datavisual from "../../components/Cryptoview/datavisual"

const Cryptoview = () => {

   const [markets, setMarket] = useState([]);
   const [search, setSearch] = useState('');

   useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
         .then(res => {
            setMarket(res.data);
            console.log(res.data);
         }).catch(err => console.log(err));
   }, []);

   const handleSearch = e => {
      setSearch(e.target.value);
   }

   const filteredMarket = markets.filter(market =>
      market.name.toLowerCase().includes(search.toLowerCase())
   );

   return (
      <Layout>
         <SEO title="cryptoview" />
         <DashWrapper>
            <SideNav />
            <DataContainer>

               <CryptoContainer>
                  <DataChartsSearch>
                     <SearchTitle>Search for Currency</SearchTitle>
                     <SearchForm>
                        <SearchInput
                           type="text"
                           placeholder="Search Currency"
                           onChange={handleSearch}
                        />
                     </SearchForm>
                  </DataChartsSearch>

                  <DataVisContainer>
                     {filteredMarket.map(market => {
                        return (
                           <Datavisual
                              key={market.id}
                              name={market.name}
                              image={market.image}
                              symbol={market.symbol}
                              marketcap={market.market_cap}
                              price={market.current_price}
                              priceChange={market.price_change_percentage_24h}
                              volume={market.total_volume}
                           />
                        )
                     })}

                  </DataVisContainer>
               </CryptoContainer>

               <DataCharts>

                  <DataChartsVis>
                     <DataChartsItem>
                        <h1>Helo</h1>
                     </DataChartsItem>

                     <DataChartsItem>
                        <h1>Helo</h1>
                     </DataChartsItem>

                     <DataChartsItem>
                        <h1>Helo</h1>
                     </DataChartsItem>

                     <DataChartsItem>
                        <h1>Helo</h1>
                     </DataChartsItem>
                  </DataChartsVis>



               </DataCharts>

            </DataContainer>
         </DashWrapper>
      </Layout>
   );

}

export default Cryptoview
