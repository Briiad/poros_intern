import React from 'react'
import {
   DataVisual,
   VisualRow,
   MarketImg,
   MarketName,
   MarketData,
   MarketPrice,
   MarketVolume,
   Market,
   MarketRed,
   MarketGreen,
} from './Elements'

function Datavisual({ image, name, symbol, price, volume, priceChange, marketcap }) {
   return (
      <>
         <DataVisual>
            <VisualRow>
               <Market>
                  <MarketImg src={image} />
                  <MarketName>{name}</MarketName>
               </Market>

               <MarketData>
                  <MarketPrice>IDR{price.toLocaleString()}</MarketPrice>
                  <MarketVolume>IDR{volume.toLocaleString()}</MarketVolume>
                  {priceChange < 0 ? (
                     <MarketRed>{priceChange.toFixed(2)}%</MarketRed>
                  ) : <MarketGreen>{priceChange.toFixed(2)}%</MarketGreen>
                  }
               </MarketData>


            </VisualRow>
         </DataVisual>
      </>
   )
}

export default Datavisual
