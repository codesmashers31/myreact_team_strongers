import { useContext, useState } from "react";
import MyContext from "../context/MyContext_New";

const Tarneroy_Op = () => {
  console.log('I am tarnery running....');
  const [light, setLight] = useState(true);


  const {data,setData} = useContext(MyContext);

  return (
    <>
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-md mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Light Switch Demo</h2>
        <p className="text-center text-gray-600 mb-8">Click the button to toggle the light state</p>
        
        <div className="flex flex-col items-center justify-center space-y-8">
          <button 
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
              light 
                ? "bg-amber-500 hover:bg-amber-600 text-white" 
                : "bg-gray-800 hover:bg-gray-900 text-white"
            }`}
            onClick={() => setLight(!light)}
          >
            {light ? "Turn Off" : "Turn On"}
          </button>
          
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Light effect */}
            {light && (
              <div className="absolute inset-0 bg-amber-100 rounded-full blur-xl animate-pulse"></div>
            )}
            
            <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
              light 
                ? "bg-amber-400 border-amber-500 shadow-lg shadow-amber-200" 
                : "bg-gray-800 border-gray-900 shadow-lg shadow-gray-800/30"
            }`}>
              <span className={`text-2xl font-bold ${light ? "text-white" : "text-gray-500"}`}>
                {light ? "ON" : "OFF"}
              </span>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Current state: <span className={`font-semibold ${light ? "text-amber-600" : "text-gray-700"}`}>
                {light ? "Light is ON" : "Light is OFF"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
   

<section>
  <h1>{data}</h1>
  <button onClick={()=>{setData("This is udpated")}}>This is the button</button>
</section>


</>

  );
};

export default Tarneroy_Op;