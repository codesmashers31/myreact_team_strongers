import { useEffect, useState } from "react";


const UseEffect_Page = () => {
  console.log('This is my component running');
  

const [count,setCount] = useState(0);


useEffect(()=>{
console.log('Use Effect running');
  const time =  setInterval(()=>{

    console.log('this is set ruuning');
    

  setCount((p)=>p+1)

},1000);

return ()=>clearInterval(time)



},[count])  






  const codeSyntax = `useEffect(() => {
  // callback code
}, []);`;

  return (
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-200">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          React useEffect Hook
        </h2>

        {/* Small intro */}
        <p className="text-center text-gray-600 mb-6">
          <span className="font-semibold">Definition:</span> 
          <br />useEffect is a hook for handling{" "}
          <span className="text-indigo-600 font-medium">side effects</span> in React components.  
          It works like lifecycle methods in class components.
        </p>

        {/* Syntax Block */}
        <div className="bg-gray-900 text-green-400 text-sm rounded-lg p-4 font-mono mb-6 overflow-x-auto">
          {codeSyntax}
        </div>

        {/* Interview Friendly Explanation */}
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Interview Key Points:</h3>
        <ul className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            <b>Without Dependency</b> → Runs every render 🔁
          </li>
          <li>
            <b>Empty Dependency []</b> → Runs only once (on mount) 🟢
          </li>
          <li>
            <b>With Dependency [state]</b> → Runs when that state/prop changes 🎯
          </li>
        </ul>

        {/* Live Example */}
        <div className="mt-8 p-4 bg-gray-100 rounded-xl shadow-inner">
          <p className="font-semibold mb-2 text-gray-800">Live Example:</p>
          <p className="mb-3 text-gray-600">Count: <span className="font-bold text-indigo-600">{count}</span></p> 
       
        </div>
      </div>
    </section>
  );
};

export default UseEffect_Page;
