import React, { useState, useEffect } from "react"
import axios from 'axios'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SideNav from "../../components/SideNav"
import Datacharts from '../../components/Cryptoview/datacharts'

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

} from '../../components/Cryptoview/Elements'

import Datavisual from "../../components/Cryptoview/datavisual"

const Cryptoview = () => {

   const [markets, setMarket] = useState([]);
   const [search, setSearch] = useState('');

   useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
         .then(res => {
            setMarket(res.data);
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

               <DataCharts>
                  <DataChartsVis>
                     <DataChartsItem>
                        <Datacharts />
                     </DataChartsItem>

                     <DataChartsItem>

                     </DataChartsItem>
                  </DataChartsVis>
               </DataCharts>


               <CryptoContainer>
                  <DataChartsSearch>
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

            </DataContainer>
         </DashWrapper>
      </Layout>
   );

}

export default Cryptoview
