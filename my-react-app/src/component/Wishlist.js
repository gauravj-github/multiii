import React, { useState ,useEffect} from 'react'
import Slidbar from './Slidbar'
import axios from 'axios'
import { CurrencyContext} from '../congtext/context'
import { useContext } from 'react'
import { live } from '../config'
const user_id=localStorage.getItem('user_id')

const Wishlist = () => {
  const [wishlistData, setwishlistData] = useState()
  const { CurrencyData } = useContext(CurrencyContext)

  const baseurl = "https://multivendor.pythonanywhere.com/"
  const baseUrl = "https://multivendor.pythonanywhere.com/api/customer/"

  const WishlistData = (baseurl) => {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setwishlistData(data.results)
        console.log(data.results, "error")
      })
      .catch((error) => console.error('Error:', error));
  }

  useEffect(() => {
    WishlistData(baseUrl + `${user_id}/wishitems/`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const removeFromeWishlist = (id) => {
    const formData = new FormData();
    formData.append("product_id", id)
    axios.post(`${live}api/remove-from-wishlist/`, formData)
      .then(function (response) {
        console.log(response.data.bool)
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className='flex gap-6'>
      <div className="mt-16"><Slidbar /></div>

      <div className="container mx-auto p-4 mr-11 mt-20">
        <h1 className="text-2xl font-bold mb-6">Wishlist</h1>

        {wishlistData && wishlistData.length > 0 ? (
          wishlistData.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border-b border-gray-200 w-6/12">
              <div className="flex items-center">
                <img className="w-24 h-24 object-cover rounded-lg mr-4" src={`${baseurl}${item.product.image}`} alt="Product" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">{item.product.title}</p>
                  {CurrencyData === "inr" && <p className="font-bold text-2xl">Price : ₹{item.product.price}</p>}
                  {CurrencyData === "usd" && <p className="font-bold text-2xl">Price : ${item.product.price}</p>}
                </div>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300" onClick={() => removeFromeWishlist(item.product.id)}>Remove</button>
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