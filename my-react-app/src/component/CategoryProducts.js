import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Singleproduct from './Singleproduct';

const CategoryProducts = () => {
  return (
    <>
    <div className='font-bold text-2xl justify-center text-center p-4' >
  <span className='text-red-600'> Python</span>  Product
  </div>
  <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-20 ml-20">


   <Singleproduct></Singleproduct>
   <Singleproduct></Singleproduct>
   <Singleproduct></Singleproduct>
   <Singleproduct></Singleproduct>
   <Singleproduct></Singleproduct>
</main>
   </>
  )
}

export default CategoryProducts