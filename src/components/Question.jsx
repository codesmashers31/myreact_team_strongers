import { useState } from "react";

const Question = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImags] = useState(true);
  const [question1, setQuestion] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  const [question_One] = useState([{ 
    question: 1, 
    point1: "Represents dynamic data in a component that can change over time.", 
    point2: "Used to control UI behavior, like showing/hiding elements or updating values. It can be primitive (number, string) or complex (array, object)." 
  }]);
  
  const [question_two] = useState([{ 
    question2: 1, 
    point1: "Called inside the component function (not outside or in loops).", 
    point2: "A React Hook used to create state in functional components. Returns a pair: [state, setState]. Imported from react: import { useState } from 'react'." 
  }]);

  const showingdata = (questionNum) => {
    setActiveQuestion(questionNum);
    
    if (questionNum === 1) {
      setTimeout(() => {
        setQuestion(true);
        setLoading(false);
      }, 3000);
      
      setImags(false);
      setLoading(true);
    }
  };

  return (
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
          React Concepts Explained
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl shadow-lg border border-amber-200">
            <button 
              className="w-full text-center text-white p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all mb-4 font-medium shadow-md"
              onClick={() => showingdata(1)}
            >
              Click to see the Answer - State
            </button>

            {images && (
              <div className="flex justify-center mb-4">
                <img src="./images/2.jpg" alt="State illustration" className="rounded-lg shadow-md max-h-48" />
              </div>
            )}

            {question1 && activeQuestion === 1 && question_One.map((questions, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-inner animate-fade-in">
                <h3 className="font-semibold text-blue-800 mb-2">What is State?</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>{questions.point1}</li>
                  <li>{questions.point2}</li>
                </ul>
              </div>
            ))}

            {loading && activeQuestion === 1 && (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg border border-blue-200">
            <button 
              className="w-full text-center text-white p-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 transition-all mb-4 font-medium shadow-md"
              onClick={() => showingdata(2)}
            >
              Click to see the Answer - Use State
            </button>

            {activeQuestion === 2 && question_two.map((questions_two, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-inner animate-fade-in">
                <h3 className="font-semibold text-amber-800 mb-2">What is useState?</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>{questions_two.point1}</li>
                  <li>{questions_two.point2}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;