import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Sheared/Navbar/Navbar';
import PurchaseItems from './Pages/Home/PurchaseItems';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import NotFound from './Pages/Sheared/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import RequireAuth from './Pages/RequirePages/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Contact from './Pages/Contact/Contact';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import AddReview from './Pages/Dashboard/AddReview';
import AllUsers from './Pages/Dashboard/AllUsers';
import Payment from './Pages/Dashboard/Payments';
import RequireAdmin from './Pages/RequirePages/RequireAdmin';


function App() {
  return (
    <div className='max-w-7x1 mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/purchase/:id' element={
          <RequireAuth>
            <PurchaseItems></PurchaseItems>
          </RequireAuth>
        }></Route>

        <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>

          <Route path='myorder' element={<MyOrder></MyOrder>}></Route>

          <Route path='manageproduct' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>

          <Route path='manageorders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>

          <Route path='update' element={<UpdateProfile></UpdateProfile>}></Route>

          <Route path='review' element={<AddReview></AddReview>}></Route>

          <Route path='alluser' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>

          <Route path='payment/:id' element={<Payment></Payment>}></Route>

        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
