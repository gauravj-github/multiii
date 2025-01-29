import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Category = () => {
  const baseUrl = "http://127.0.0.1:8000/api/caterories/"

  const [totalResult, setTotalResults] = useState()

  const [category, setCategory] = useState([])
  useEffect(() => {
    caregories(baseUrl);
  }, [])

  function caregories(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())  // Invoke json() method
      .then((data) => (setCategory(data.results), setTotalResults(data.count))) // Log the data
      .catch((error) => console.error('Error:', error));  // Handle any errors
  }

  function changeUrl(baseUrl) {
    caregories(baseUrl)
    console.log(baseUrl)
  }

  // pagination
  var links = []
  for (let i = 1; i <= totalResult; i++) {
    links.push(<Link className="border-black border p-3 mb-5 bg-teal-300" onClick={() => changeUrl(baseUrl + `?page=${i}`)} >{i}</Link>
    )
  }

  return (
    <div>

      {/*popular categories */}
      <div className="flex  justify-center text-center p-4 m-4 mr-20 ml-20  ">
        <h3 className="font-bold text-2xl">All Category</h3>

      </div>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-20 ml-20" >
        {category.map((product) => (
            <div key={product.id} className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
            {/* Product Image */}
            <div className="relative">
              <Link to={`/category/${product.title}/${product.id}`}>

                <img
                  className="w-full h-64 object-cover rounded-t-lg"
                  src="https://via.placeholder.com/300"
                  alt="Product"
                />
              </Link>

            </div>

            {/* Product Info */}
            <div className="p-4">
              {/* Product Title */}
              <h3 className="font-semibold text-gray-800 truncate text-2xl">
                {product.title}          </h3>


              {/* Price */}

              <div className='text-xl p-3 m-2'>
                <p >  Products Downloades:22</p>
              </div>
            </div>
          </div>
        ))}
      </main>
      <ul className='flex justify-center items-center  '>
        {links}
      </ul>

    </div>
  )
}

export default Category