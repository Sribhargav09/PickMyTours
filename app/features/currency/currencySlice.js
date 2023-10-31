import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { useEffect } from 'react';



const currencyContent = [
    { id: 1, name: "United States dollar", currency: "USD", rate: "", symbol: "$" },
    { id: 2, name: "Australian dollar", currency: "AUD", rate: "", symbol: "$" },
    { id: 3, name: "Brazilian real", currency: "BRL", rate: "", symbol: "R$" },
    { id: 4, name: "Bulgarian lev", currency: "BGN", rate: "", symbol: "лв." },
    { id: 5, name: "Canadian dollar", currency: "CAD", rate: "", symbol: "$" },
    { id: 6, name: "Bangladeshi Taka", currency: "BDT", rate: "", symbol: "৳" },
    { id: 7, name: "Azerbaijan Manat", currency: "AZN", rate: "", symbol: "₼" },
    { id: 8, name: "Colombia Peso", currency: "COP", rate: "", symbol: "$" },
    { id: 9, name: "Oman Rial", currency: "OMR", rate: "", symbol: "﷼" },
    { id: 10, name: "India Rupee", currency: "INR", rate: "1", symbol: "₹" },
    { id: 11, name: "Iran Rial", currency: "IRR", rate: "", symbol: "﷼" },
    { id: 12, name: "Japan Yen", currency: "JPY", rate: "", symbol: "£" },
    { id: 13, name: "Jersey Pound", currency: "JEP", rate: "", symbol: "£" },
    { id: 14, name: "Korea (South) Won", currency: "KRW", rate: "", symbol: "	₩" },
    { id: 15, name: "Lebanon Pound", currency: "LBP", rate: "", symbol: "$" },
    { id: 16, name: "Liberia Dollar", currency: "LRD", rate: "", symbol: "$" },
    { id: 17, name: "Malaysia Ringgit", currency: "MYR", rate: "", symbol: "$" },
    { id: 18, name: "Mexico Peso", currency: "MXN", rate: "", symbol: "$" },
    { id: 19, name: "Namibia Dollar", currency: "NAD", rate: "", symbol: "R$" },
    { id: 20, name: "Nepal Rupee", currency: "NPR", rate: "", symbol: "Nepal Rupee" },
  ];

  let currency =  currencyContent[9];

  
  
  if(typeof window !== 'undefined'){
    console.log(sessionStorage.getItem('currency'));
    if(!sessionStorage.getItem('currency')){
      console.log('h1');
      sessionStorage.setItem('currency', JSON.stringify(currencyContent[9]));
    }else{
      console.log('h2');
      currency = JSON.parse(sessionStorage.getItem('currency'));
    }
  }

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencies: currencyContent,
    selectedCurrency: currency
  },
  reducers: {
    changeCurrency: (state, action) => {
      console.log(action.payload);
      let data = action.payload;

      const to = (data.currency)?.toLowerCase();

      axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json`)
        .then((res) => {
          console.log(res)
          const rates = res.data['inr'];
          //currencyItem.rate = JSON.stringify(rates[to]);
          data = {...data, rate:rates[to]};
        });
  

      if(typeof window !== 'undefined'){
        sessionStorage.setItem('currency', JSON.stringify(data));
      }
      state.selectedCurrency = data;
  
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeCurrency } = currencySlice.actions

export default currencySlice.reducer