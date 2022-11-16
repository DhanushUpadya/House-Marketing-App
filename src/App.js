import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Explore from './pages/Explore';
import Forgotpassword from './pages/Forgotpassword';
import Navbar from './components/Navbar';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';



function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Explore/>}/>

      <Route path='/forgotpassword' element={<Forgotpassword/>}/>

      <Route path='/offers' element={<Offers/>}/>

      <Route path='/profile' element={<Signin/>}/>

      <Route path='/signin' element={<Signin/>}/>

      <Route path='/signup' element={<Signup/>}/>
    </Routes>

    <Navbar/>
   </Router>
 </>
  );
}

export default App;
