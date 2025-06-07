import React from 'react'
import Singleproduct from './Singleproduct'
import { useState,useEffect } from 'react'
import {useParams,Link} from 'react-router-dom/cjs/react-router-dom.min'
import { live } from '../config'

const TagProducts = () => {
  const baseUrl =`${live}api/`
    const [products , setProducts] =useState([])
    const [totalResult , setTotalResults] =useState(0) 
    const {slug_slug} = useParams()
        console.log(slug_slug)

  useEffect(()=>{
  fetchData(`${baseUrl}products/${slug_slug}`);
  },[])

  function fetchData(baseurl){
  fetch(baseurl)
    .then((response) => response.json())  // Invoke json() method
    .then((data) => {setProducts(data.results) 
    setTotalResults(data.count)} ) // Log the data
    .catch((error) => console.error('Error:', error));  // Handle any errors

  }
  
  console.log(products)


  function changeUrl(baseurl){
    console.log(baseurl)
    fetchData(baseurl)
  }
  
  var links =[]
  var limit =1
  var totalLinks = totalResult/limit
  for (let i=0;i<totalLinks;i++){
    links.push(<li className='border-black border p-3 mb-5 bg-teal-300'>
      <Link  onClick={()=>changeUrl(baseUrl+`products/${slug_slug}/?page=${i}`)} >{i}</Link>
      </li>
    )
  }
  return (
    <div>
         
    <div className='font-bold text-2xl justify-center text-center p-4' >
Category Product

  </div>

  <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-20 ml-20">

{
  products.map((product)=>(<Singleproduct key={product.id} product={product}></Singleproduct> ))
  }
      

</main>


   <ul className='flex justify-center items-center/ '>
    {links}
   </ul>
    </div>
  )
}

export default  TagProducts 
