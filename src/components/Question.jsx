import { useState } from "react";

const Question = () => {

    const [question_One, setQuestion_One] = useState([{ question: 1, point1: "Represents dynamic data in a component that can change over time.", point2: "Used to control UI behavior, like showing/hiding elements or updating values.It can be primitive (number, string) or complex (array, object)." }])
    const [question_two, setQuestion_Two] = useState([{ question2: 1, point1: "Called inside the component function (not outside or in loops).", point2: "A React Hook used to create state in functional components.Returns a pair: [state, setState].Imported from react: import { useState } from 'react'." }])
    return (
        <>
            <div className="p-3 bg-blue-400 flex gap-10 justify-center items-center">


               


                <div className="bg-amber-100 p-3 w-100 rounded">

 <button className="w-95 text-center text-white p-2 rounded-md bg-black mb-2">Click to see the Ans - State</button>
                    {question_One.map((questions, i) => (
                        <>
                            <h2>
                                {i + 1}. {questions.point1}
                                <br />
                                {2}. {questions.point2}

                            </h2>

                        </>
                    ))}
                </div>


                

                <div className="bg-amber-100 p-3 w-100 rounded">
<button className="w-95 text-center text-white p-2 rounded-md bg-black mb-2">Click to see the Ans - Use State</button>


                    {question_two.map((questions_two, i) => (
                        <>
                            <h2>
                                {i + 1}. {questions_two.point1}
                                <br />
                                {2}. {questions_two.point2}

                            </h2>

                        </>
                    ))}
                </div>

            </div>
        </>
    )

}


export default Question;