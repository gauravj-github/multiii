import React from 'react'
import Singleproduct from './Singleproduct'
const Allproducts = () => {
  return (
    <div>
         
    <div className='font-bold text-2xl justify-center text-center p-4' >
AllProduct
  </div>

  <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-20 ml-20">


<Singleproduct></Singleproduct>
<Singleproduct></Singleproduct>
<Singleproduct></Singleproduct>
<Singleproduct></Singleproduct>
<Singleproduct></Singleproduct>
</main>


   
    </div>
  )
}

export default Allproducts