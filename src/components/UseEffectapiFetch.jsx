
import { useEffect, useState } from "react";




// SkeletonCard for Loading
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


// Create A component called useEffecrapiFetch

const UseEffectapiFetch = () => {

  // Create a state for fetching product handling.

  const [product, setProduct] = useState([]);

  // When we need a loading while we fetch the datas form the Api.

  const [loading, setLoading] = useState(true);

  // Search the product need for Input values

  const [search, setSearch] = useState("");

// Brand needed to take the brand value for handling brand filter
  const [brand, setBrand] = useState("");


  // price fillter for handilng so create the state
  const [price, setPrice] = useState("");

  // Fetch methods for Api calling


  // useEffect(()=>{
  // fetch("https://dummyjson.com/products")
  // .then((res)=>res.json())
  // .then((data)=>setProduct(data.products))
  // .catch((err)=>console.log(err));
  // },[])

  // useEffect() - Hook Function
  // inside function insert callback function as a parameter - ()=>{}
  // , to spilt for depantance []

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://dummyjson.com/products?limit=10")
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data.products))
  //     .catch((err) => console.error('Something is error', err));
  //   setLoading(false);
  // }, [])


  //console.log('This is product',product);



  // async fetch process
  //  for When we enetr the website the function is triggers
  useEffect(() => {

    const fetchProducts = async () => {

    //  when the function is called forst step the loading for showing the correct info
      setLoading(true);

      // try catch methods for Handling error
      try {
      //  fetch API
        const res = await fetch("https://dummyjson.com/products?limit=10");
        // Json Parse - Normal json string -> java script object convertion.
        const data = await res.json();
        
        // Parsed data to store the Product values
        setProduct(data.products);
        //console.log('This is res data',product.title);

      } catch (err) {

        console.error("Sommeting error", err.message);


      }
      finally {
        // when the datas come the loading is off
        setLoading(false);
      }

    }

    // call the function for running
    fetchProducts();

  }, []);


// searchIdems function is to take the vlaues and store into the serch variable
  const searchIdems = (e) => {

    setSearch(e.target.value);

  }



  //console.log(filteredproducts);



  //filteredproducts();

  // to showing the Branding names for i use the array methods to take the brand names saparatly
  const brandOption = product.map((p) => p.brand);

  //console.log(brandOption);

  // we create a let variable for re assinging bcoz we need to showing the same datas in the product list
  let filteredproducts = product;

  //console.log(filteredproducts);
  // Condtion when the loading is Completed to shoiwng the all datas 
  if (!loading) {

    filteredproducts = filteredproducts.filter((prod) => prod.title.toLowerCase().includes(search.toLowerCase()))

  }
// Brand to fileter the values 
  if (brand) {

    filteredproducts = filteredproducts.filter((p) => p.brand === brand);

  }
// Price is low to fileter the values 
  if (price === "low") {
    filteredproducts = filteredproducts.slice().sort((a, b) => a.price - b.price);


// Price to high fileter the values 
  } else if (price === "high") {
    filteredproducts = filteredproducts.slice().sort((a, b) => b.price - a.price);
  }



  return (
    <>
      <section className="pt-24 pb-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
          Our Product List
        </h2>

        <div className="mb-8 flex justify-between p-3 gap-4">
          <input type="text" value={search} className="p-3 w-full max-w-md border rounded-2xl focus:outline focus:ring-2 focus:ring-black"
            placeholder="Search Product you want" onChange={searchIdems} disabled={loading} />

          <select name="" id="" value={brand} onChange={(e) => setBrand(e.target.value)} disabled={loading} className="p-2 w-full max-w-md rounded-2xl border focus:ring-2 focus:outline focus:ring-black">
            <option value="" >All Brand Name</option>

            {brandOption.map((b) => (
              <option value={b} key={b}>{b}</option>
            ))}
          </select>
          <select value={price} onChange={(e) => setPrice(e.target.value)} disabled={loading} className="p-2 w-full max-w-md rounded-2xl border focus:ring-2 focus:outline focus:ring-black">
            <option value="">Sort by Price</option>
            <option value="low">Low Price</option>
            <option value="high">High price</option>

          </select>
        </div>


        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Show skeleton cards while loading */}



          {/* data.map(()=>(
      
      
      
      )) */}
          {/* constion ? true:false */}
          {loading ? Array.from({ length: 8 })

            .map((_, ix) => (

              <SkeletonCard key={ix} />

            )) : filteredproducts.map((product_new) => (
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


          {/* Show message if no results */}
          {!loading && filteredproducts.length === 0 && (
            <div className="col-span-full text-center text-gray-500 font-semibold">
              No products found.
            </div>
          )}




        </div>
      </section>

    </>
  );
};

export default UseEffectapiFetch;
