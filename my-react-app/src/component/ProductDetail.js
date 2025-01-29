import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState,useContext } from "react";
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; 
import { MdAttachMoney } from 'react-icons/md'; 
import Singleproduct from "./Singleproduct";
import { UserContext,CartContext } from "../congtext/context";


const ProductDetail = () => {
  const { id } = useParams();
  const {cartData,setCartData} =useContext(CartContext)
  const images = [
    "https://via.placeholder.com/600?text=Image+1",
    "https://via.placeholder.com/600?text=Image+2",
    "https://via.placeholder.com/600?text=Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [productDet, setProductDetail] = useState([]);
  const [productTag ,setproductTag] =useState([]) 
   const [relatedProduct ,setrelatedProduct] =useState([])
  const [addtocart , setaddtocart ] = useState(false)

  // const [para ,setpara] =useState(false)


  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (id) {
      productDetailIdwise(id);
    }
    fetchRelatedProduct()
    chechProductInCart(id)

  }, [id]);

  const productDetailIdwise = (productId) => {
    fetch(`http://127.0.0.1:8000/api/product/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        setProductDetail(data)
        setproductTag(data.tag_list)

        // setproductTag() // Update state with product details
      })
      .catch((error) => console.error("Error fetching product details:", error));
  };
 

  const fetchRelatedProduct = () => {
    fetch(`http://127.0.0.1:8000/api/related-product/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        setrelatedProduct(data.results)

        // setproductTag() // Update state with product details
      })
      .catch((error) => console.error("Error fetching product details:", error));
  };
// console.log(relatedProduct)
  const tagesLinks=[]
  for (let i=0 ; i<productTag.length ; i++){
    let tag =productTag[i].trim()
    tagesLinks.push(<Link className="mr-6 p-2 bg-gray-600 shadow-xl text-white rounded-xl hover:text-green-400 hover:shadow-2xl" to={`/products/${tag}`}>{tag}</Link>)

    
  }
  function chechProductInCart(id){
    var previouscart = localStorage.getItem("cartData")
    // console.log(previouscart,"kuugkbhb")
    var cartjson = JSON.parse(previouscart)
            // console.log(cartjson,"khukuugkbhb")


    if(cartjson!=null){
    cartjson.map((cart ,index)=>{
      console.log(cart.produc.id,"kuugkbhb")
      console.log(id, "kjvb")
      if(cart!=null && cart.produc.id == id ){
        setaddtocart(true)
      }

    })
  }
  }

  const addtoCart=()=>{

    const cartData ={
      "produc":{
        "id":productDet.id,
        "title":productDet.title,
        "image":productDet.image,
        "price": productDet.price
      },
      "user":{
    "id":1
      }
    }
//  console.log(productDet,"djnlz" )
    // const data= JSON.stringify(cartData)
    // localStorage.setItem("cartData",data)

 
    let previouscart = localStorage.getItem("cartData")
    let CartJson = JSON.parse(previouscart)
    console.log(CartJson)
    if (CartJson!=null){
      CartJson.push(cartData)
      var cartstring = JSON.stringify(CartJson)
      localStorage.setItem("cartData",cartstring)
      setCartData(CartJson)
    }
    else{
      var newCartList =[]
      newCartList.push(cartData)
      var cartstring =JSON.stringify(newCartList)
      localStorage.setItem("cartData",cartstring)

    }
    setaddtocart(true)


  }

  const removetoCart=()=>{
    var previouscart = localStorage.getItem("cartData")
    var CartJson = JSON.parse(previouscart)
    // console.log(cartjson,"kdjczbnk")
    CartJson.map((cart ,index)=>{
      if(cart!=null && cart.produc.id == productDet.id){
        // delete cartjson[index]}     
        CartJson.splice(index,1)


    }})
    var cartstring = JSON.stringify(CartJson)
    localStorage.setItem("cartData",cartstring)
    

    setaddtocart(false)
    setCartData(CartJson)

    

    }
    // console.log(cartData)

  return (


    <div key={id} className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}         


        <div className="relative flex flex-col items-center">


            {/* Image Display */ }
            <div className="flex justify-center items-center w-full max-w-md overflow-hidden rounded-lg shadow-lg">
    {productDet.product_imgs && productDet.product_imgs.length > 0 ? (
      <img
        src={productDet.product_imgs[currentIndex]?.image}
        alt={`Product Image ${currentIndex + 1}`}
        className="rounded-lg w-full object-cover"
      />
    ) : (
      <p>No images available</p>
    )}
  </div>

            {/* Navigation Buttons */ }
            <div className="flex justify-between w-full max-w-md mt-4">
              <button
                onClick={handlePrev}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Next
              </button>
            </div>

            {/* Indicators */ }
            <div className="flex justify-center space-x-2 mt-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                    }`}
                ></div>
              ))}
            </div>
    </div>    


        {/* Product Information Section */}
        <div>
          {/* Product Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
{productDet.title} 
   </h1>

          {/* Price */}
          <p className="text-2xl font-bold text-gray-900 mt-4">₹{productDet.price}           </p>

          {/* Description */}
          <p className="text-gray-700 mt-4">
          {productDet.detail} 
          </p>
<div className="flex gap-4">
          {/* Add to Cart Button */}
          {!addtocart  && <button className="mt-6 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg text-lg hover:bg-blue-700 transition   hover:border-x-2 hover:border-y-2 hover:border-black" type="submit">
      <FaShoppingCart className="text-xl" /> {/* Cart Icon */}
      <Link  onClick={addtoCart}>
        Add to Cart
      </Link>
    </button>}
    {addtocart && <button className="mt-6 flex items-center justify-center gap-2 bg-yellow-950 text-white py-3 px-4 rounded-lg text-lg hover:bg-red-700 transition  hover:border-x-2 hover:border-y-2 hover:border-black">
      <FaShoppingCart className="text-xl" /> {/* Cart Icon */}
      <Link  onClick={removetoCart}>
        Remove to Cart
      </Link>
    </button>}
         
    <button className="mt-6 flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg text-lg hover:bg-green-700  transition   hover:border-x-2 hover:border-y-2 hover:border-black">
        <MdAttachMoney className="text-xl" />
        <Link target="_blank" to="#">
          Buy Now
        </Link>
      </button>

      {/* Wishlist Button */}
      <button className="mt-6 flex items-center justify-center gap-2 bg-pink-600 text-white py-3 px-4 rounded-lg text-lg hover:bg-pink-700 transition   hover:border-x-2 hover:border-y-2 hover:border-black">
        <FaHeart className="text-xl" />
        <Link target="_blank" to="#">
          Wishlist
        </Link>
      </button>

      <button className="mt-6 flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded-lg text-lg hover:bg-gray-600 hover:border-x-2 hover:border-y-2 hover:border-black transition">
      <FaShoppingCart className="text-xl" /> {/* Cart Icon */}
      <a href={productDet.demo_url}>
        Demo
      </a>
    </button>
      </div>


          <div className="h-0.5 bg-black mt-3"></div>
          <div >
            <h3 className="text-2xl font-bold mt-3">Tages</h3>
            <p className="mt-3" >
            {/* {para &&(
          <p className="mb-3">
            no tages are available for this product
          </p>
          )} */}
{tagesLinks}
            </p>
          </div>
        </div>

z


      </div>
      {relatedProduct.length>0 &&
       <>
      <div className="flex  justify-center text-center p-4 m-4 mr-20 ml-20 mt-20  ">
        <h3 className="font-bold text-2xl text-red-600">Related Product</h3>


      </div>
     
     
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-10 ml-10">
      {relatedProduct.map((product)=>(<Singleproduct product={product}></Singleproduct>))}

      </main>
      </>
      }
      <div>
   
      </div>
    </div>
  );
};

export default ProductDetail;

// "title": "py",
// "detail": "pyy",
// "price": 200.0,
// "product_rating":