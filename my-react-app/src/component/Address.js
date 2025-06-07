import { useEffect, useState } from 'react'
import Slidbar from './Slidbar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
const customer_id = localStorage.getItem('user_id')
import { live } from '../config'
const Address = () => {
        const[address,setaddress]=useState([])
        const[nn,setnn]=useState()
        useEffect(()=>{
                addressData()
              },[])
              function addressData(){
            axios.get(`${live}api/customer/${customer_id}/address-list/`)
            .then(function(response){
              // console.log(response.data.results)
              setaddress(response.data.results)
              
            })
            .catch(function(error){
            console.log(error)
            })
            }

            function Checkbox(id){
              console.log(isFinite,',shcb')
              const formData = new FormData();
              formData.append("address_id",id)
              console.log(id)
              axios.post(`${live}api/mark-defaut-address/${id}/`,formData) 
              .then(function (response) {
                  console.log(response.data.address)
                  window.location.reload()
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
  return (
        
                <div className="flex justify-between shadow-2xl m-10 p-5 rounded-lg">
                  
                  {/* Sidebar */}
                  <div className="mt-14 w-1/4">
                    <Slidbar />
                  </div>
                  
                  {/* Address List */}
                  <div className="w-full flex flex-col items-center">
                    <div className="w-2/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                      
                      {/* Address Item */}
                      {address.length > 0 ? (
                        address.map((item, index) => (
                          <div key={item.id} className="flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-200">
                            {item.default_address == true && <input type='checkbox' checked></input>}
                            {item.default_address == false && <input type='checkbox' onClick={()=>Checkbox(item.id)}></input>}
                        
                                <Link to={`/customer/update-address/${item.id}`} >
                            <p className="text-lg font-medium text-gray-800">{item.address || 'No address available'}</p>
                            </Link>
                          </div>
                        ))
                      ) : (
                        <div className="text-center col-span-3 text-xl text-gray-500">
                          No addresses available, please add some.
                        </div>
                      )}
                    </div>
            
                    {/* Add Address Button */}
                    <div className="mt-5 flex justify-center w-full">
                      <Link
                        to="/customer/AddAddress"
                        className="bg-green-500 text-white text-lg font-semibold py-2 px-6 rounded-full border-2 border-red-600 shadow-lg transform transition-all hover:bg-black hover:text-white hover:scale-105 duration-300"
                      >
                        + Add Address
                      </Link>
                    </div>
                  </div>
                </div>
  )
}

export default Address