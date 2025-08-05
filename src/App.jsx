
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Usestate_One from './components/Usestate_One'
import Tarneroy_Op from './components/Tarneroy_Op'


function App() {





  

  return (
    <>
 





     <nav className='bg-black text-white font-bold flex p-4 justify-around gap-2'>

      <div>
        <h3>Logo</h3>
      </div>

      <div>
      <Link to="/usestate">Use State</Link>
      <Link to="/tarneroy_op">Use Ternary Operators</Link>
      </div>

     </nav>
        
    <Routes>
      <Route path='/usestate' element={<Usestate_One/>}></Route>
      <Route path='/tarneroy_op' element={<Tarneroy_Op/>}></Route>
    </Routes>
    </>
  )
}

export default App
