import { useState } from "react";

const Usestate_One = () => {
  console.log('I am running form state....');
  const [adding, setAdding] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleclick = () => {
    console.log('Function state running...');
    setIsAnimating(true);
    setAdding(adding * 2);
    
    // Reset animation after a short delay
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-md mx-auto bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-3xl shadow-xl border border-amber-200">
        <h1 className="text-2xl font-bold text-center mb-2 text-amber-900">useState Counter Demo</h1>
        <p className="text-center text-amber-700 mb-6">Watch the value multiply with each click</p>
        
        <div className="bg-white p-6 rounded-2xl shadow-inner mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-1">Current Value</p>
            <div className={`text-5xl font-bold text-amber-600 transition-all duration-300 ${
              isAnimating ? "scale-125" : "scale-100"
            }`}>
              {adding}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleclick}
            disabled={adding > 1000000} // Prevent extremely large numbers
          >
            Multiply by 2
          </button>
          
          {adding > 1000000 && (
            <p className="text-sm text-amber-700 mt-4">
              Number is getting too large! Reset recommended.
            </p>
          )}
          
          <button 
            className="mt-4 text-sm text-amber-600 hover:text-amber-800 underline"
            onClick={() => setAdding(1)}
          >
            Reset Counter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Usestate_One;