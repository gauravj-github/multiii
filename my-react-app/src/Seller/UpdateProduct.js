import React, { useState, useEffect } from 'react';
import SellerSlidbar from "./SellerSlidbar";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
const live = "https://multivendor.pythonanywhere.com/"

const UpdateProduct = () => {
  const { id } = useParams();
  const history = useHistory();
  const [category, setcategory] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [title, settitle] = useState('');
  const [slug, setslug] = useState('');
  const [detail, setdetail] = useState('');
  const [price, setprice] = useState('');
  const [tag, settag] = useState('');
  const [image, setimage] = useState(null);
  const [product_file, setproduct_file] = useState(null);
  const [udsPrice, setudsPrice] = useState('');
  const [demoUrl, setdemoUrl] = useState('');
  const [multipleimg, setmultipleimg] = useState([]);
  const [productImages, setProductImages] = useState({
    image1: null,
    image2: null,
    image3: null,
  });

  const vendor_id = localStorage.getItem('vender_id');

  useEffect(() => {
    fetchData(id);
    fetchCategories(`${live}api/caterories/`);
  }, []);

  const fetchData = (id) => {
    axios.get(`${live}api/product/${id}`)
      .then(response => {
        const dat = response.data;
        setcategory(dat.category);
        settitle(dat.title);
        setslug(dat.slug);
        setdetail(dat.detail);
        setprice(dat.price);
        settag(dat.tag_list);
        setimage(dat.image);
        setproduct_file(dat.product_file);
        setudsPrice(dat.uds_price);
        setdemoUrl(dat.demo_url);
        setmultipleimg(dat.product_imgs);
      })
      .catch(error => console.log(error));
  };

  const fetchCategories = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategoryList(data.results))
      .catch((error) => console.error('Error:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") setcategory(value);
    if (name === "title") settitle(value);
    if (name === "slug") setslug(value);
    if (name === "detail") setdetail(value);
    if (name === "price") setprice(value);
    if (name === "usdprice") setudsPrice(value);
    if (name === "tag") settag(value);
    if (name === "demoUrl") setdemoUrl(value);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "image") setimage(files[0]);
    if (name === "product_file") setproduct_file(files[0]);
  };

  const handleMultipleImageChange = (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setProductImages((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('category', category);
    formDataToSend.append('vendor', vendor_id);
    formDataToSend.append('title', title);
    formDataToSend.append('slug', slug);
    formDataToSend.append('detail', detail);
    formDataToSend.append('price', price);
    formDataToSend.append('uds_price', udsPrice);
    formDataToSend.append('tag', tag);
    formDataToSend.append('demo_url', demoUrl);

    if (image) formDataToSend.append('image', image);
    if (product_file) formDataToSend.append('product_file', product_file);

    // console.log("🔄 Form submitting...");
    // console.log("🖼️ ProductImages:", productImages);

    axios.patch(`${live}api/product/${id}`, formDataToSend, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(response => {
      console.log(" Product Updated:", response.data.id);

      // Upload additional images one by one
      Object.keys(productImages).forEach((key) => {
        const file = productImages[key];
        if (file) {
          const imgForm = new FormData();
          imgForm.append('Product', id);
          imgForm.append('image', file);

          console.log(`📤 Uploading ${key}:`, file.name);

          axios.post(`${live}api/product-img/?from_update=1`, imgForm, {
            headers: { 'Content-Type': 'multipart/form-data' }
          })
          .then(res => console.log(` ${key} uploaded`, res.data))
          .catch(err => console.error(` Error uploading ${key}:`, err));
        }
      });

    })
    .catch(error => console.error(" Error updating product:", error));
  };

  function deleteimg(id){
    console.log(id)
    axios.delete(`${live}api/productdeleteimagemultiple/${id}`)
    .then(res => console.log("uploaded", res.data,
      window.location.reload()
    ))
    .catch(err => console.error(err));

  }

  return (
    <div className="flex shadow-2xl p-10 mt-8 w-full">
<div>      <SellerSlidbar />
</div>      
<div className="flex items-center justify-center w-full md:ml-32">
        <div className="w-full max-w-md sm:max-w-3xl bg-gray-300 rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Product Update</h2>

          <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
            <select name="category" value={category} onChange={handleInputChange} className="block w-full px-6 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg">
              <option value="">-- Select Category --</option>
              {categoryList.map((item, index) => (
                <option value={item.id} key={index}>{item.title}</option>
              ))}
            </select>

            <input type="text" name="title" placeholder="Title" value={title} onChange={handleInputChange} className="w-full" />
            <input type="text" name="slug" placeholder="Slug" value={slug} onChange={handleInputChange} className="w-full" />
            <textarea name="detail" value={detail} onChange={handleInputChange} rows="4" className="w-full" placeholder="Description" />
            <input type="number" name="price" value={price} onChange={handleInputChange} placeholder="Price (INR)" className="w-full" />
            <input type="number" name="usdprice" value={udsPrice} onChange={handleInputChange} placeholder="Price (USD)" className="w-full" />
            <input type="text" name="tag" value={tag} onChange={handleInputChange} placeholder="Tag" className="w-full" />

            <div>
              <label htmlFor="image">Product Image</label>
              <input type="file" name="image" onChange={handleFileChange} />
              {image && (
                <img
                  className="w-36 h-44 mt-2 rounded-2xl"
                  src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                  alt="preview"
                />
              )}
            </div>

            <div>
              <label htmlFor="product_file">Product File</label>
              <input type="file" name="product_file" onChange={handleFileChange} />
            </div>

            <input type="url" name="demoUrl" value={demoUrl} onChange={handleInputChange} placeholder="Demo URL" className="w-full" />

            <p className="font-medium">Upload three images for product detail page:</p>
            <input type="file" name="image1" accept="image/*" onChange={handleMultipleImageChange} />
            <input type="file" name="image2" accept="image/*" onChange={handleMultipleImageChange} />
            <input type="file" name="image3" accept="image/*" onChange={handleMultipleImageChange} />

            <div className="flex gap-4 mt-4 flex-wrap">
              {multipleimg.map((item, index) => (
                <>
                <div className=''>
               <button className='bg-red-700  p-1 rounded-md text-xl font-bold' onClick={()=>deleteimg(item.id)}> Delet </button>
               <img key={index} className="w-36 h-44 rounded-2xl" src={item.image} alt={`Product ${index}`} /> 
               </div>
                </>
               
              ))}
            </div>

            <button type="submit" className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg">
              Update Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
