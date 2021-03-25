import React from 'react'
import {
   DataVisual,
   VisualRow,
   MarketImg,
   MarketName,
   MarketData,
   Market,
   MarketRed,
   MarketGreen,
} from './Elements'

import { GoArrowDown, GoArrowUp } from 'react-icons/go'

function dataClick() {
   console.log("bisa");
}

function Datavisual({ image, name, priceChange }) {
   return (
      <>
         <DataVisual onClick={dataClick} >
            <VisualRow  >
               <Market>
                  <MarketImg src={image} />
                  <MarketName>{name}</MarketName>
               </Market>

               <MarketData>
                  {priceChange < 0 ? (
                     <MarketRed><GoArrowDown />{priceChange.toFixed(2)}%</MarketRed>
                  ) : <MarketGreen><GoArrowUp />{priceChange.toFixed(2)}%</MarketGreen>
                  }
               </MarketData>


            </VisualRow>
         </DataVisual>
      </>
   )
}

export default Datavisual
