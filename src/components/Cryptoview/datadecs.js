import React from 'react'
import axios from 'axios'

import {
   DatadecsWrapper
} from './Elements'

function Datadesc({ price, rank, cap, name }) {
   return (
      <>
         <DatadecsWrapper>
            <h1>{name}</h1>
            <h1>Market rank: {rank}</h1>
            <h1>Market cap: {cap}</h1>
            <h1>current price: IDR {price}</h1>
         </DatadecsWrapper>
      </>
   );
}

export default Datadesc