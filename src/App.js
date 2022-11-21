import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Explore from './pages/Explore';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import Forgotpassword from './pages/Forgotpassword';
import Navbar from './components/Navbar';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
import Category from './pages/Category';


function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Explore/>}/>

      <Route path='/forgotpassword' element={<Forgotpassword/>}/>

      <Route path='/offers' element={<Offers/>}/>
      <Route path='/category/:categoryName' element={<Category/>}/>
    <Route path ='/profile' element={<PrivateRoute/>}>
    <Route path='/profile' element={<Profile/>}/>
    </Route>

      <Route path='/signin' element={<Signin/>}/>

      <Route path='/signup' element={<Signup/>}/>
    </Routes>

    <Navbar/>
   </Router>

   <ToastContainer />
 </>
  );
}

export default App;
