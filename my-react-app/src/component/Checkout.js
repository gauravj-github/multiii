import {React,useState} from 'react'
import { Link, } from 'react-router-dom/cjs/react-router-dom.min'
import { CartContext,CurrencyContext} from '../congtext/context'
import { useContext } from 'react'
import { live } from '../config'

const Checkout = () => {
    const _currency = localStorage.getItem("currency")
    const { cartData, setCartData } = useContext(CartContext)
    const [productDet, setProductDetail] = useState([]);
    const {CurrencyData} =useContext(CurrencyContext)
    
      console.log(CurrencyData ,",chj bcm")
    if (cartData == null || cartData.length == 0) {
        var cartItems = 0
    }
    else {
        var cartItems = cartData.length
    }

  var sum=0
  if (cartItems>0){
    cartData.map((item)=>{

        if (CurrencyData =="inr" ) {
         sum+=parseFloat(item.produc.price)
        }
        else if(CurrencyData =="usd"){
            sum+=parseFloat(item.produc.usd_price)

        }
  })
  }
    const removetoCart=(product_id)=>{
        var previouscart = localStorage.getItem("cartData")
        var CartJson = JSON.parse(previouscart)
        // console.log(cartjson,"kdjczbnk")
        CartJson.map((cart ,index)=>{
          if(cart!=null && cart.produc.id == product_id){
            // delete cartjson[index]}     
            CartJson.splice(index,1)
    
    
        }})
        var cartstring = JSON.stringify(CartJson)
        localStorage.setItem("cartData",cartstring)
        
    
        setCartData(CartJson)
    
        
    
        }
    return (
        <div className="container mx-auto  p-10 ">
            {/* {cartItems ==0 &&
        <p>your cart in empty</p> } */}
            <h1 className="font-bold mb-9 text-green-700 text-center text-4xl mt-10">Your Cart ({cartItems})</h1>
            {cartItems  &&

                <div className='flex  justify-center '>
                    <div className="border rounded-lg p-4 shadow-lg bg-white w-7/12">

                        {cartData.map((cart, index) => (

                            //   console.log(cart.produc.image)
                            <div className="flex items-center space-x-4 mb-4 justify-between " key={index}>
                                <span>{index + 1} <span>)</span></span>
                                <div>
                                    <img src={cart.produc.image} alt="Product" className="w-24 h-24 object-cover rounded-lg" />
                                    <h2 className="text-lg font-semibold text-center">{cart.produc.title}</h2>
                                </div>
                                <div className="flex items-center space-x-4 mb-4 ">
                                    {_currency !="usd" &&<p className=" mr-16 font-bold text-xl">₹{cart.produc.price}</p> }
                                    { _currency =="usd" &&  <p className=" mr-16 font-bold text-xl">${cart.produc.usd_price}</p>
 }
                                    <div className="flex items-center space-x-2 mt-2">
                                        <button className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400">-</button>
                                        <span>1</span>
                                        <button className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400">+</button>
                                    </div>
                                </div>
                                <button className="text-red-500 hover:text-red-700 font-bold text-xl bg-black p-4 rounded-full" onClick={()=>removetoCart(cart.produc.id)}>Remove</button>
                            </div>
                        ))}

                        <div className="flex justify-between items-center mt-4">
                        {CurrencyData =="inr" && <p className="font-bold text-2xl">Total Ammount : ₹{sum}</p>}

                            {CurrencyData =="usd" && <p className="font-bold text-2xl">Total Ammount : ${sum}</p>}
                            
                            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Checkout</button>
                        </div>
                    </div>

                    <div className=' gap-4 text-center justify-center mt-5 '>
    <button className='bg-gray-600 mr-2 text-white rounded-xl xl hover:text-green-400 font-bold p-4'><Link to="/categories">Continue Shopping </Link></button>
    <Link className='bg-green-700 mr-2 text-white rounded-xl xl hover:text-black font-bold p-4' to='/order/success'>Proceed Payment</Link>
    </div>
                </div>
            }
                   {!cartItems &&
                   <div  className="text-center">
                   <p className='text-red-600 text-2xl font-bold mb-5'>your car in empty</p>
                   <Link className=" bg-green-500 p-2 border border-black  rounded-full text-xl font-bold "  to='/Allproduct' >Home page</Link>
                   </div>
                   }


        </div>
    )
}

export default Checkout