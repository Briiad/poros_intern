import React, { useState, useEffect } from "react"
import axios from 'axios'

//COMPONENTS
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SideNav from "../../components/SideNav"
import Datacharts from '../../components/Cryptoview/datacharts'
import Datavisual from '../../components/Cryptoview/datavisual'

//STYLED COMPONENTS
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
import Datadesc from "../../components/Cryptoview/datadecs"

const Cryptoview = () => {

   const [markets, setMarket] = useState([]);
   const [decs, setDesc] = useState([]);
   const [search, setSearch] = useState('');

   useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30')
         .then(res => {
            setMarket(res.data);
            setDesc(res.data[0]);
            console.log(res.data[0]);
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
                        {[decs].map(d => {
                           return (
                              <Datadesc
                                 key={d.id}
                                 name={d.name}
                                 price={d.current_price}
                                 rank={d.market_cap_rank}
                                 cap={d.market_cap}
                              />
                           );
                        })}
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
