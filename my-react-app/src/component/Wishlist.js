import React, { useState ,useEffect} from 'react'
import Slidbar from './Slidbar'
import axios from 'axios'
import { CurrencyContext} from '../congtext/context'
import { useContext } from 'react'
const user_id=localStorage.getItem('user_id')
const Wishlist = () => {
    const [wishlistData ,setwishlistData]=useState()
      const {CurrencyData} =useContext(CurrencyContext)
    
    // console(user_id)
    const baseurl="http://127.0.0.1:8000"
      const baseUrl ="http://127.0.0.1:8000/api/customer/"
          useEffect(()=>{
            WishlistData(baseUrl+`${user_id}/wishitems/`);
          },[])
        
          function WishlistData(baseurl){
          fetch(baseurl)
            .then((response) => response.json())  // Invoke json() method
            .then((data) => {setwishlistData(data.results)
              console.log(data.results,"error")} ) 
            .catch((error) => console.error('Error:', error));  // Handle any errors
          }
          
  function removeFromeWishlist(id){
            const formData =new FormData();
            formData.append("product_id",id)
            axios.post('http://127.0.0.1:8000/api/remove-from-wishlist/',formData)
            .then(function(response){
              console.log(response.data.bool)
              window.location.reload()
              if (response.data.bool==true){
                // setremovewishlist(true)
                // alert("Data Deleted")
              }
              else{
                // setremovewishlist(false)
              }
            })
            .catch(function(error){
            console.log(error)
            })
           }
          
  return (
    <div className='flex gap-6'>
                <div className="mt-16"><Slidbar></Slidbar></div>

        <div class="container mx-auto p-4  mr-11 mt-20">
    <h1 class="text-2xl font-bold mb-6">Wishlist</h1>
    
    {wishlistData && wishlistData.length > 0 ? (
  wishlistData.map((item) => (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 w-6/12 ">
      <div className="flex items-center">
        <img className="w-24 h-24 object-cover rounded-lg mr-4" src={`${baseurl}${item.product.image}`} alt="Product" />
        <div>
          <p className="text-lg font-semibold text-gray-800">{item.product.title}</p>
          {/* <p className="text-gray-600">Price: ${item.product.price}</p> */}

          {CurrencyData =="inr" && <p className="font-bold text-2xl">Price : ₹{item.product.price}</p>}

{CurrencyData =="usd" && <p className="font-bold text-2xl">Price : ${item.product.price}</p>}
        </div>
      </div>
      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300" onClick={()=>removeFromeWishlist(item.product.id)}>Remove</button>
    </div>
  ))
) : (
  <p className="text-center text-black text-2xl font-bold mt-4">No items in your wishlist , pleas add some </p>
)}

   
</div>
    </div>
  )
}

export default Wishlist