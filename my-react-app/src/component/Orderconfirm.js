import { UserContext,CartContext} from '../congtext/context'
import { useContext,useState} from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { live } from '../config'

export const Orderconfirm = () => {
  const userContext = useContext(UserContext); // Correct use of useContext
  const { cartData, setCartData } = useContext(CartContext)
  const [pay ,setpay]=useState('')
  const [orderstatus , setorderstatus] = ('false')
  const[orderid,setorder] = useState()
  const initialOptions = {
    "client-id": "AfjYKK610LSY8hFOnfXul2ejhBUJKo4fzbKPk2IpV8TrMbaE-qEWJJ0KgGPEN4MMdsDATndaiahWIEJi",
    currency: "USD",
    intent: "capture",
  };
  const history = useHistory()
  console.log(userContext,'kjhvk')  
 
  if(userContext == null){
    history.push('/user/login')

  }
 else{
    addorderIntable()
 }
function addorderIntable(){
const customer_id  = localStorage.getItem('user_id',)
console.log(customer_id)
//  const formdata = new FormDat a()
//  formdata.append('customer',1 )
//  console.log(formdata)
axios.post(`${live}api/orders/?customer_id=${customer_id}`)

.then(function(response){
  console.log(response.data.id)
  orderItem(response.data.id)
  setorder(response.data.id)


})
.catch(function(error){
console.log(error)
})
}
function orderItem(order_id){
  const customer_id  = localStorage.getItem('cartData')
  const cartjson = JSON.parse(customer_id)
  console.log(cartjson)
  if (cartjson !=null){
    cartjson.map((cart,index)=>{
      console.log()
      const formData = new FormData()
      formData.append('order',order_id)
      formData.append('product',cart.produc.id)
      formData.append('qty',1)
      formData.append('price',cart.produc.price)

      axios.post(`${live}api/orderItem/`,formData)
      .then(function(response){
        console.log(response.data)
        cartjson.splice(index ,1)
        localStorage.setItem('cartData',JSON.stringify(cartjson))
        setCartData(cartjson)
      
      })
      .catch(function(error){
      console.log(error)
      })
  } 
 
)
 
}
// const updateddata  = localStorage.getItem('cartData')
// const updateddataa = JSON.parse(updateddata)
// setCartData(updateddataa)

  


}

const paymentDone=()=>{
if (pay == ""){
  alert("select any payment mode please")
}
}
function updateOrderStatus(orderstatus){
  console.log(orderid,orderstatus)
  axios.post(`${live}api/update-order-status/${orderid}`)
  .then((response)=>{
    console.log(response.data)
    history.push("/customer/order")

  })
  .catch((error)=>{
    console.log(error)
    // history.push("/order/failuer")

  })
}

 console.log(pay)
  return (
    <div className='text-center justify-center items-center flex flex-col'>
        <p className=' text mt-10 mb-10 text-2xl font-bold text-green-500' >Your order has been confirmed</p>
        <span className='text-20'>order_id : {orderid}</span>
        <div className='text-2xl text-center'>
       <div >
       <input type='radio' name='m' className='mr-3' onChange={()=>setpay("paypal")}/>
        <label>pay pal</label>
        
       </div>
       <div onChange={()=>setpay("pay pal")}>
       <input type='radio' name='m' className='mr-3'></input>
        <label>pay pal</label>
       
       </div>
       <div className='mb-10' onChange={()=>setpay("pay pal")}>
       <input type='radio' name='m' className='mr-3'></input>
        <label>Razor pay</label>
       </div>
       {pay == 'paypal'}
       <PayPalScriptProvider options={{"client-id": "AfjYKK610LSY8hFOnfXul2ejhBUJKo4fzbKPk2IpV8TrMbaE-qEWJJ0KgGPEN4MMdsDATndaiahWIEJi"}}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "20.00", // Amount to charge
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
            console.log(details);
            updateOrderStatus (true)  
          });
        }}
        onError={(err) => {
          console.error("Error:", err);
        }}
      />
    </PayPalScriptProvider>
       <button className ="bg-green-600 p-2" type="submit"
        // onClick={updateOrderStatus(true)}
        >submit</button> 
       
       </div>


    </div>
  )
}
