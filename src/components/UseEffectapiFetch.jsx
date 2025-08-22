import { useEffect, useState } from "react";


const SkeletonCard = () => (
  <div className="bg-gray-200 animate-pulse rounded-2xl overflow-hidden flex flex-col">
    <div className="h-56 w-full bg-gray-300"></div>
    <div className="p-4 flex flex-col flex-grow">
      <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded mb-4 w-full"></div>
      <div className="flex justify-between items-center mt-auto">
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="h-8 bg-gray-300 rounded w-16"></div>
      </div>
    </div>
  </div>
);

const UseEffectapiFetch = () => {

const [product,setProduct] = useState([]);

const [loading,setLoading] = useState(true);




// useEffect(()=>{


// fetch("https://dummyjson.com/products")
// .then((res)=>res.json())
// .then((data)=>setProduct(data.products))
// .catch((err)=>console.log(err));

// },[])

// useEffect() - Hook Function
// inside function insert callback function as a parameter - ()=>{}
// , to spilt for depantance []
 










useEffect(()=>{
  setLoading(true);
 fetch("https://dummyjson.com/products?limit=10")
 .then((res)=>res.json())
 .then((data)=>setProduct(data.products))
 .catch((err)=>console.error('Something is error',err));
  setLoading(false);
},[])


//console.log('This is product',product);




  return (
    <>
<section className="pt-24 pb-12 px-4">
  <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
    Our Product List
  </h2>












  {/* Grid layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

     {/* Show skeleton cards while loading */}



     {/* data.map(()=>(
      
      
      
      )) */}
     {/* constion ? true:false */}
     { loading ? Array.from({ length: 8 })
     
     .map((_, ix)=>(

      <SkeletonCard key={ix}/>

     )) : product.map((product_new) => (
      <div
        key={product_new.id}
        className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
      >
        {/* Image */}
        <img
          src={product_new.images[0]}
          alt={product_new.title}
          className="h-56 w-full object-cover"
        />

        {/* Card content */}
        <div className="p-4 flex flex-col flex-grow">
          <h1 className="font-bold text-lg text-gray-800 mb-2">
            {product_new.title.slice(0, 20)}
          </h1>
          <p className="text-sm text-gray-600 mb-4 flex-grow">
            {product_new.description.slice(0, 50)}...
          </p>

          {/* Price + Button */}
          <div className="flex justify-between items-center mt-auto">
            <p className="text-lg font-bold text-green-700">
              Rs {product_new.price}
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ))  
    
    
    
    
    }



  
  </div>
</section>

    </>
  );
};

export default UseEffectapiFetch;




