// App.jsx
import './App.css';
import Navbar from './components/Navbar';
import MyProvider from './context/MyProvider';
import AppRoutes from './AppRoutes';

function App() {


  
  return (
    <>
      <header className='mb-0'>
        {/* <Navbar/> */}
      </header>
      <MyProvider>
        <AppRoutes />
      </MyProvider>




    <section>
      <div>

      </div>
    </section>


    </>
  );
}

export default App;