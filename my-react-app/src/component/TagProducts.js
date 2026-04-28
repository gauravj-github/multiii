import React from 'react'
import Singleproduct from './Singleproduct'
import { useState,useEffect } from 'react'
import {useParams,Link} from 'react-router-dom/cjs/react-router-dom.min'
import { live } from '../config'

const TagProducts = () => {
  const baseUrl = `${live}api/`
  const [products, setProducts] = useState([])
  const { slug_slug } = useParams()
  console.log(slug_slug)

  const fetchData = (baseurl) => {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results)
      })
      .catch((error) => console.error('Error:', error));
  }

  useEffect(() => {
    fetchData(`${baseUrl}products/${slug_slug}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug_slug])
  
  console.log(products)


  const changeUrl = (baseurl) => {
    console.log(baseurl)
    fetchData(baseurl)
  }

  const links = []
  const limit = 1
  const totalLinks = products.length / limit
  for (let i = 0; i < totalLinks; i++) {
    links.push(<li key={i} className='border-black border p-3 mb-5 bg-teal-300'>
      <button onClick={() => changeUrl(baseUrl + `products/${slug_slug}/?page=${i}`)} className='bg-none border-none cursor-pointer'>{i}</button>
    </li>)
  }
  return (
    <div>
      <div className='font-bold text-2xl justify-center text-center p-4'>
        Category Product
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-20 ml-20">
        {products.map((product) => (<Singleproduct key={product.id} product={product} />))}
      </main>


      <ul className='flex justify-center items-center'>
        {links}
      </ul>
    </div>
  )
}

export default TagProducts 
