
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Usestate_One from './components/Usestate_One'
import Tarneroy_Op from './components/Tarneroy_Op'
import Navbar from './components/Navbar'
import Question from './components/Question'
import Landing from './pages/Landing'


function App() {
  return (
    <>
    <header className='mb-0'>
      <Navbar/>
    </header>
        
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/usestate' element={<Usestate_One/>}></Route>
      <Route path='/tarneroy_op' element={<Tarneroy_Op/>}></Route>
      <Route path='/part3' element={<Question/>}></Route>
    </Routes>
    </>
  )
}

export default App
