import React from 'react'
import {
   DataVisual,
   VisualRow,
   MarketImg,
   MarketName,
   MarketData,
   MarketPrice,
   MarketSymbol,
   MarketCap,
   Market,
   MarketRed,
   MarketGreen,
} from './Elements'

import { GoArrowDown, GoArrowUp } from 'react-icons/go'

function Datavisual({ image, name, symbol, price, priceChange, marketcap }) {
   return (
      <>
         <DataVisual>
            <VisualRow>
               <Market>
                  <MarketImg src={image} />
                  <MarketName>{name}</MarketName>
               </Market>

               <MarketData>
                  {/* <MarketSymbol>{symbol}</MarketSymbol> */}
                  {priceChange < 0 ? (
                     <MarketRed><GoArrowDown />{priceChange.toFixed(2)}%</MarketRed>
                  ) : <MarketGreen><GoArrowUp />{priceChange.toFixed(2)}%</MarketGreen>
                  }
                  {/* <MarketPrice>IDR{price.toLocaleString()}</MarketPrice> */}
                  {/* <MarketCap>IDR{marketcap.toLocaleString()}</MarketCap> */}
               </MarketData>


            </VisualRow>
         </DataVisual>
      </>
   )
}

export default Datavisual
