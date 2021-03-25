import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar, Line } from 'react-chartjs-2'

function Datacharts() {

   const [chartData, setChartData] = useState({});

   const chart = () => {
      let empName = ['1h', '24h', '7d', '14d', '30d'];
      let emp1h = [];

      //CALLING API FOR CHARTS

      axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&ids=bitcoin&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1`)
         .then(res => {
            //console.log(res.data);
            for (const dataObj of res.data) {
               emp1h.push(parseFloat(dataObj.price_change_percentage_1h_in_currency.toFixed(2)))
               emp1h.push(parseFloat(dataObj.price_change_percentage_24h_in_currency.toFixed(2)))
               emp1h.push(parseFloat(dataObj.price_change_percentage_7d_in_currency.toFixed(2)))
               emp1h.push(parseFloat(dataObj.price_change_percentage_14d_in_currency.toFixed(2)))
               emp1h.push(parseFloat(dataObj.price_change_percentage_30d_in_currency.toFixed(2)))
            }
            setChartData({
               labels: empName,
               datasets: [
                  {
                     label: 'Percentage',
                     data: emp1h,
                     borderWidth: 1,
                     backgroundColor: [
                        'rgba(255, 191, 10, 0.5)',
                        'rgba(255, 191, 10, 0.5)',
                        'rgba(255, 191, 10, 0.5)',
                        'rgba(255, 191, 10, 0.5)',
                        'rgba(255, 191, 10, 0.5)'
                     ]
                  }
               ]
            })
         }).catch(err => {
            alert(err);
         });

      //console.log(emp1h, empName);
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
               title: { text: 'Crypto Chart', display: true, fontColor: "white" },
               legend: {
                  labels: {
                     fontColor: "white"
                  }
               },
               scales: {
                  yAxes: [
                     {
                        ticks: {
                           fontColor: "white",
                           stepSize: 1,
                           maxTicksLimit: 10,
                           beginAtZero: true
                        }
                     }
                  ],
                  xAxes: [
                     {
                        ticks: {
                           fontColor: "white",
                           stepSize: 1,
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
