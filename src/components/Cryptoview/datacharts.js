import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar, Line } from 'react-chartjs-2'

function Datacharts() {

   const [chartData, setChartData] = useState({});
   const [marketName, setMarketName] = useState([]);
   const [marketCap, setMarketCap] = useState([]);

   const chart = () => {
      let empName = ['1h', '24h', '7d', '14d', '30d', '200d'];
      let emp1h = [];

      axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&ids=bitcoin&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1`)
         .then(res => {
            //console.log(res.data);
            for (const dataObj of res.data) {
               emp1h.push(parseFloat(dataObj.price_change_percentage_1h_in_currency))
               emp1h.push(parseFloat(dataObj.price_change_percentage_24h_in_currency))
               emp1h.push(parseFloat(dataObj.price_change_percentage_7d_in_currency))
               emp1h.push(parseFloat(dataObj.price_change_percentage_14d_in_currency))
               emp1h.push(parseFloat(dataObj.price_change_percentage_30d_in_currency))
               emp1h.push(parseFloat(dataObj.price_change_percentage_200d_in_currency))
            }
         }).catch(err => {
            alert(err);
         });

      //console.log(emp1h, empName);

      setChartData({
         labels: empName,
         datasets: [
            {
               label: 'change percentage',
               data: emp1h,
               borderWidth: 1
            }
         ]
      })
   };

   useEffect(() => {
      chart()
   }, [])



   return (
      <>
         <Line
            height={200}
            data={chartData}
            options={{
               responsive: true,
               title: { text: 'Crypto Chart', display: true },
               scales: {
                  yAxes: [
                     {
                        ticks: {
                           autoSkip: true,
                           maxTicksLimit: 10,
                           beginAtZero: true
                        }
                     }
                  ]
               }
            }}
         />
      </>
   );
}

export default Datacharts
