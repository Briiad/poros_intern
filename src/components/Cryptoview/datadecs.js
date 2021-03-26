import React from 'react'
import axios from 'axios'

import {
   DatadecsWrapper,
   DatadescP,
   DatadescH1
} from './Elements'

function Datadesc({ price, rank, cap, name }) {
   return (
      <>
         <DatadecsWrapper>
            <DatadescH1>{name}</DatadescH1>
            <DatadescP>Market rank  : {rank}</DatadescP>
            <DatadescP>Market cap   : IDR {cap}</DatadescP>
            <DatadescP>Current price: IDR {price}</DatadescP>
         </DatadecsWrapper>
      </>
   );
}

export default Datadesc