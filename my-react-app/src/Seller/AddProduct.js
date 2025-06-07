import { useState, useEffect } from 'react';
import SellerSlidbar from './SellerSlidbar';
import axios from 'axios';

const vender_id = localStorage.getItem('vender_id');
const live = "https://multivendor.pythonanywhere.com/"
const AddProduct = () => {
  // console.log(vender_id,"j")
  const [category, setCategory] = useState([]);
  const [formData, setFormData] = useState({
    category: 0,
    title: '',
    slug: '',
    detail: '',
    price: '',
    tag: '',
    image: '',
    product_file: '',
    udsPrice: '',
    demoUrl: '',
  });
  const [successMessage, setSuccessMessage] = useState(''); // State to hold success message
  const [errorMessage, setErrorMessage] = useState(''); // State to hold error message
  const [productImages, setProductImages] = useState({
    image1: null,
    image2: null,
    image3: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };
  const handleMultipleImageChange = (e) => {
    const { name, files } = e.target;
    setProductImages((prevImages) => ({
      ...prevImages,
      [name]: files[0],
    }));
  };
  // 
// console.log(productimg,"dhv")
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.category,formData.vendor,"ngv")
    const formDataToSend = new FormData();

    // Append other form data fields to formData
    formDataToSend.append('category', formData.category);
    formDataToSend.append('vendor', vender_id);
    formDataToSend.append('title', formData.title);
    formDataToSend.append('slug', formData.slug);
    formDataToSend.append('detail', formData.detail);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('tag', formData.tag);
    formDataToSend.append('udsPrice', formData.udsPrice);
    formDataToSend.append('demoUrl', formData.demoUrl);

    // Append the files to formData
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    if (formData.product_file) {
      formDataToSend.append('product_file', formData.product_file);
    }
console.log(formData)
    // Send the request using axios
    axios
      .post(`${live}api/products/`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      })
      .then(function (response) {


        for (const key in productImages) {

            const imageForm = new FormData();
            imageForm.append('Product', response.data.id);
            imageForm.append('image', productImages[key]);
        axios
        .post(`${live}apiapi/product-img/`, imageForm,{
          headers: {
            'Content-Type': 'multipart/form-data',
          },
      })
    
      
        .then(function (response) {
          // setSuccessMessage('Product added successfully!'); // Set success message
          // setErrorMessage(''); // Clear error message (if any)
          console.log(response.data, 'Product is added');
        })
        .catch(function (error) {
          // setErrorMessage('There was an error adding the product. Please try again.'); // Set error message
          // setSuccessMessage(''); // Clear success message (if any)
          console.log(error);
        });
      }

        // for multiple images
   







        setSuccessMessage('Product added successfully!'); // Set success message
        setErrorMessage(''); // Clear error message (if any)
        console.log(response.data, 'Product is added');
      })
      .catch(function (error) {
        setErrorMessage('There was an error adding the product. Please try again.'); // Set error message
        setSuccessMessage(''); // Clear success message (if any)
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  function fetchCategory() {
    axios
      .get(`${live}api/caterories/`)
      .then(function (response) {
        console.log(response.data.results);
        setCategory(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="flex shadow-2xl p-10 mt-8 w-full">
      <div>
        <SellerSlidbar />
      </div>
      <div className="flex items-center justify-center w-full md:ml-32">
        <div className="w-full max-w-md sm:max-w-3xl bg-gray-500 rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Product</h2>

          {/* Success or Error Message */}
          {successMessage && (
            <div className="bg-green-500 text-white p-3 rounded-lg mb-4">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="bg-red-500 text-white p-3 rounded-lg mb-4">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Categories
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mt-1 block w-full px-6 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {category.map((item, index) => (
                  <option value={item.id} key={index}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 block w-full px-6 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product title"
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                className="mt-1 block w-full px-6 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product slug"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="detail" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="detail"
                value={formData.detail}
                onChange={handleInputChange}
                className="mt-1 block w-full px-6 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product description"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="mt-1 block w-full px-6 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product price"
                required
              />
            </div>

            {/* Tag */}
            <div>
              <label htmlFor="tag" className="block text-sm font-medium text-gray-700">
                Tag
              </label>
              <input
                type="text"
                name="tag"
                value={formData.tag}
                onChange={handleInputChange}
                className="mt-1 block w-full px-6 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product tags"
              />
            </div>

            {/* Product Image */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Product Image
              </label>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="mt-1 block w-full text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                accept="image/*"
              />
            </div>

            {/* Product File */}
            <div>
              <label htmlFor="product_file" className="block text-sm font-medium text-gray-700">
                Product File
              </label>
              <input
                type="file"
                name="product_file"
                onChange={handleFileChange}
                className="mt-1 block w-full text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                accept="file/*"
              />
            </div>

            {/* Demo URL */}
            <div>
              <label htmlFor="demoUrl" className="block text-sm font-medium text-gray-700">
                Demo URL
              </label>
              <input
                type="url"
                name="demoUrl"
                value={formData.demoUrl}
                onChange={handleInputChange}
                className="mt-1 block w-full px-6 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter demo URL"
              />
            </div>
            <p>upload three image for product detail page </p>
            <div>
        <label className="block">Product Image 1</label>
        <input type="file" name="image1" accept="image/*" onChange={handleMultipleImageChange} className="w-full" />
      </div>
      <div>
        <label className="block">Product Image 2</label>
        <input type="file" name="image2" accept="image/*" onChange={handleMultipleImageChange} className="w-full" />
      </div>
      <div>
        <label className="block">Product Image 3</label>
        <input type="file" name="image3" accept="image/*" onChange={handleMultipleImageChange} className="w-full" />
      </div>

            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
