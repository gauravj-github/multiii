import React, { useContext } from 'react'
import { useState } from 'react'
import {CurrencyContext } from '../../congtext/context'
const Changecurency = () => {
const currentCurrency = localStorage.getItem("currency")
//  const [Currency ,SetCurrency]=useState(currentCurrency)
  const {CurrencyData ,setCurrencyData}=useContext(CurrencyContext)
  function Changecurrency(e){
    var _currency=e.target.value
    localStorage.removeItem("currency")
    localStorage.setItem("currency",_currency)
  //  console.log(Getcurrency,"hgch")
  //   SetCurrency(Getcurrency)
  setCurrencyData(_currency)
  }
  // console.log(Currency,"kddjcn")
  return (
    <div>
      <select className='bg-orange-100' onChange={Changecurrency}>
        {CurrencyData !="usd" && <>
        <option value="usd">USD</option>
        <option value='inr' selected>INR</option>
        </>
        }
        {CurrencyData =="usd" && <>
        <option value="usd" selected>USD</option>
        <option value='inr'>INR</option>
        </>
        }
       
      </select>
    </div>
  )
}

export default Changecurency