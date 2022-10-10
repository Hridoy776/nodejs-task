import logo from './logo.svg';
import {Routes,Route} from "react-router-dom"
import './App.css';
import Header from './layout/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Error from './pages/Error';

function App() {
  return (
    <div >


      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
        

      </Routes>
    </div>
  );
}

export default App;
