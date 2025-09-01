
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Usestate_One from './components/Usestate_One'
import Tarneroy_Op from './components/Tarneroy_Op'
import Navbar from './components/Navbar'
import Question from './components/Question'
import Landing from './pages/Landing'
import UseEffect_Page from './components/UseEffect_Page'
import UseEffectapiFetch from './components/UseEffectapiFetch'
import Practice from './components/Practice'
import UseRef from './components/UseRef'
import Textref from './components/Textref'


function App() {
  return (
    <>
    <header className='mb-0'>
      {/* <Navbar/> */}
      
    </header>
        
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/usestate' element={<Usestate_One/>}></Route>
      <Route path='/ternary_op' element={<Tarneroy_Op/>}></Route>
      <Route path='/part3' element={<Question/>}></Route>
      <Route path='/useeffect-basic' element={<UseEffect_Page/>}></Route>
      <Route path='/UseEffectapiFetch' element={<UseEffectapiFetch/>}></Route>
      <Route path="/practice" element={<Practice/>}></Route>
      <Route path="/ref" element={<UseRef/>}></Route>
      <Route path="/Textref" element={<Textref/>}></Route>

    </Routes>
    </>
  )
}

export default App
