import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Sheared/Navbar/Navbar';
import PurchaseItems from './Pages/ProductItems/PurchaseItems';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';


function App() {
  return (
    <div className='max-w-7x1 mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/purchase' element={<PurchaseItems></PurchaseItems>}></Route>

      </Routes>

    </div>
  );
}

export default App;
