import React from 'react'
import Singleproduct from './Singleproduct'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { live } from '../config'
import Loader from './Loader'
const Allproducts = () => {
  
    const [products , setProducts] =useState([])
    const [totalResult , setTotalResults] =useState()
    const [loading, setLoading] = useState(true);
    
  useEffect(()=>{
fetchData(`${live}api/products/`);
  },[])

  function fetchData(baseurl){
  fetch(baseurl)
    .then((response) => response.json())  // Invoke json() method
    .then((data) => {setProducts(data.results) 
      setLoading(false)
    setTotalResults(data.count)} ) // Log the data
    .catch((error) => console.error('Error:', error));  // Handle any errors
  }
  
 

  function changeUrl(baseurl){
    // console.log(baseurl)
    fetchData(baseurl)
  }
  
  var links =[]
  for (let i = 1; i <= totalResult; i++) {
  links.push(
    <li key={i} className='border-black border p-3 mb-5 bg-teal-300'>
      <Link onClick={() => changeUrl(`${live}products/?limit=1&offset=${i - 1}`)}>{i}</Link>
    </li>
  );
}

if(loading) return <Loader></Loader>

  return (
    <div>
         
    <div className='font-bold text-2xl justify-center text-center p-4' >
AllProduct

  </div>

  <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-20 ml-20">

{
  products.map((product,index)=>(<Singleproduct key={index} product={product}></Singleproduct> ))
  }
      

</main>


   <ul className='flex justify-center items-center  '>
    {links}
   </ul>
    </div>
  )
}

export default Allproducts