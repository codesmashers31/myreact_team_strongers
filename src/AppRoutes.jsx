// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Usestate_One from './components/Usestate_One';
import Tarneroy_Op from './components/Tarneroy_Op';
import Question from './components/Question';
import Landing from './pages/Landing';
import UseEffect_Page from './components/UseEffect_Page';
import UseEffectapiFetch from './components/UseEffectapiFetch';
import Practice from './components/Practice';
import UseRef from './components/UseRef';
import Textref from './components/Textref';
import NewContext from './components/NewContext';
import Register from './pages/Register';
import Reduce_Process from './components/Reduce_Process';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/usestate' element={<Usestate_One />} />
      <Route path='/ternary_op' element={<Tarneroy_Op />} />
      <Route path='/part3' element={<Question />} />
      <Route path='/useeffect-basic' element={<UseEffect_Page />} />
      <Route path='/UseEffectapiFetch' element={<UseEffectapiFetch />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/ref" element={<UseRef />} />
      <Route path="/Textref" element={<Textref />} />
      <Route path="/newcontext" element={<NewContext />} />
      <Route path="/muiltform" element={<Register/>} />
      <Route path="/Reduce_Process" element={<Reduce_Process/>} />
      
    </Routes>
  );
};

export default AppRoutes;